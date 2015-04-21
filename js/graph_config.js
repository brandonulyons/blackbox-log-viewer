"use strict";

function GraphConfig(graphConfig) {
    var
        graphs = graphConfig ? graphConfig : [],
        listeners = [];
    
    function notifyListeners() {
        for (var i = 0; i < listeners.length; i++) {
            listeners[i](this);
        }
    }
    
    this.getGraphs = function() {
        return graphs;
    };
    
    /**
     * newGraphs is an array of objects like {label: "graph label", height:, fields:[{name: curve:{offset:, power:, inputRange:, outputRange:, steps:}, color:, }, ...]}
     */
    this.setGraphs = function(newGraphs) {
        graphs = newGraphs;
        
        notifyListeners();
    };
    
    /**
     * Convert the given graph configs to make them appropriate for the given flight log.
     */
    this.adaptGraphs = function(flightLog, graphs) {
        var 
            logFieldNames = flightLog.getMainFieldNames(),
            
            // Make copies of graphs into here so we can modify them without wrecking caller's copy
            newGraphs = [];
        
        for (var i = 0; i < graphs.length; i++) {
            var 
                graph = graphs[i],
                newGraph = $.extend(
                    // Default values for missing properties:
                    {
                        height: 1
                    }, 
                    // The old graph
                    graph, 
                    // New fields to replace the old ones:
                    {
                        fields:[]
                    }
                ),
                colorIndex = 0;
            
            for (var j = 0; j < graph.fields.length; j++) {
                var
                    field = graph.fields[j],
                    matches,
                    defaultCurve;
                
                function adaptField(field) {
                    defaultCurve = GraphConfig.getDefaultCurveForField(flightLog, field.name);
                    
                    if (field.curve === undefined) {
                        field.curve = defaultCurve;
                    } else {
                        /* The curve may have been originally created for a craft with different endpoints, so use the 
                         * recommended offset and input range instead of the provided one.
                         */
                        field.curve.offset = defaultCurve.offset;
                        field.curve.inputRange = defaultCurve.inputRange;
                    }
                    
                    if (field.color === undefined) {
                        field.color = GraphConfig.PALETTE[colorIndex % GraphConfig.PALETTE.length];
                        colorIndex++;
                    }
                    
                    if (field.smoothing === undefined) {
                        field.smoothing = GraphConfig.getDefaultSmoothingForField(flightLog, field.name);
                    }
                    
                    return field;
                }
                
                if ((matches = field.name.match(/^(.+)\[all\]$/))) {
                    var 
                        nameRoot = matches[1],
                        nameRegex = new RegExp("^" + nameRoot + "\[[0-9]+\]$");
                    
                    for (var k = 0; k < logFieldNames.length; k++) {
                        if (logFieldNames[k].match(nameRegex)) {
                            newGraph.fields.push(adaptField($.extend({}, field, {name: logFieldNames[k]})));
                        }
                    }
                } else {
                    // Don't add fields if they don't exist in this log
                    if (flightLog.getMainFieldIndexByName(field.name) !== undefined) {
                        newGraph.fields.push(adaptField($.extend({}, field)));
                    }
                }
            }
            
            newGraphs.push(newGraph);
        }
        
        this.setGraphs(newGraphs);
    };
    
    this.addListener = function(listener) {
        listeners.push(listener);
    };
}

GraphConfig.PALETTE = [
    "#fb8072", // Red
    "#8dd3c7", // Cyan
    "#ffffb3", // Yellow
    "#bebada", // Purple
    "#80b1d3",
    "#fdb462",
    "#b3de69",
    "#fccde5",
    "#d9d9d9",
    "#bc80bd",
    "#ccebc5",
    "#ffed6f"
];

(function() {
    var
        EXAMPLE_GRAPHS = [
            {
                label: "Motors",
                fields: ["motor[all]", "servo[5]"]
            },
            {
                label: "Gyros",
                fields: ["gyroData[all]"]
            },
            {
                label: "Gyro + PID roll",
                fields: ["axisP[0]", "axisI[0]", "axisD[0]", "gyroData[0]"]
            },
            {
                label: "Gyro + PID pitch",
                fields: ["axisP[1]", "axisI[1]", "axisD[1]", "gyroData[1]"]
            },
            {
                label: "Gyro + PID yaw",
                fields: ["axisP[2]", "axisI[2]", "axisD[2]", "gyroData[2]"]
            },
            {
                label: "Accelerometers",
                fields: ["accSmooth[all]"]
            },
        ];

    GraphConfig.getDefaultSmoothingForField = function(flightLog, fieldName) {
        if (fieldName.match(/^motor\[/)) {
            return 5000;
        } else if (fieldName.match(/^servo\[/)) {
            return 5000;
        } else if (fieldName.match(/^gyroData\[/)) {
            return 3000;
        } else if (fieldName.match(/^accSmooth\[/)) {
            return 3000;
        } else if (fieldName.match(/^axis.\[/)) {
            return 3000;
        } else {
            return 0;
        }
    };
    
    GraphConfig.getDefaultCurveForField = function(flightLog, fieldName) {
        var
            sysConfig = flightLog.getSysConfig();
        
        if (fieldName.match(/^motor\[/)) {
            return {
                offset: -(sysConfig.maxthrottle + sysConfig.minthrottle) / 2,
                power: 1.0,
                inputRange: (sysConfig.maxthrottle - sysConfig.minthrottle) / 2,
                outputRange: 1.0
            };
        } else if (fieldName.match(/^servo\[/)) {
            return {
                offset: -1500,
                power: 1.0,
                inputRange: 500,
                outputRange: 1.0
            };
        } else if (fieldName.match(/^gyroData\[/)) {
            return {
                offset: 0,
                power: 0.25,
                inputRange: 9.0e-6 / sysConfig.gyroScale,
                outputRange: 1.0
            };
        } else if (fieldName.match(/^accSmooth\[/)) {
            return {
                offset: 0,
                power: 0.7,
                inputRange: 5000,
                outputRange: 1.0
            };
        } else if (fieldName.match(/^axis.\[/)) {
            return {
                offset: 0,
                power: 0.7,
                inputRange: 500,
                outputRange: 1.0
            };
        } else {
            return {
                offset: 0,
                power: 1.0,
                inputRange: 500,
                outputRange: 500
            };
        }
    };
    
    /**
     * Get an array of suggested graph configurations will be usable for the fields available in the given flightlog.
     * 
     * Supply an array of strings `graphNames` to only fetch the graph with the given names.
     */
    GraphConfig.getExampleGraphConfigs = function(flightLog, graphNames) {
        var
            result = [],
            i, j;
        
        for (i = 0; i < EXAMPLE_GRAPHS.length; i++) {
            var
                srcGraph = EXAMPLE_GRAPHS[i],
                destGraph = {
                    label: srcGraph.label, 
                    fields: [],
                    height: srcGraph.height || 1
                },
                found;
            
            if (graphNames !== undefined) {
                found = false;
                for (j = 0; j < graphNames.length; j++) {
                    if (srcGraph.label == graphNames[j]) {
                        found = true;
                        break;
                    }
                }
                
                if (!found) {
                    continue;
                }
            }
            
            for (j = 0; j < srcGraph.fields.length; j++) {
                var 
                    srcFieldName = srcGraph.fields[j],
                    destField = {
                        name: srcFieldName, 
                    };
                
                destGraph.fields.push(destField);
            }
            
            result.push(destGraph);
        }
        
        return result;
    };
})();