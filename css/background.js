.header-dialog .parameter th {
    background-color: #828885;
    padding: 4px;
    border-left: 0px solid #ccc;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    color: white;
    text-align: left;
}

.header-dialog .cf tr {
    background-color: #DEDEDE;
}

.header-dialog .modal-dialog {
    width:60%;
}

.header-dialog .cf th {
    border-right: solid 1px silver;
    height: 19px;
    font-weight: normal;
}

.header-dialog .cf th:last-child {
    border-right: 0px;
}

.header-dialog .cf td:first-child {
    border-bottom-left-radius: 3px;
}

.header-dialog .cf td:last-child {
    border-bottom-right-radius: 3px;
    border-right: 0px;
}

.header-dialog .cf input {
    margin: 4px;
    width: calc(100% - 10px);
    border: 1px solid silver;
    border-radius: 3px;
}

.header-dialog .cf select {
    margin: 4px;
    width: calc(100% - 10px);
    border: 1px solid silver;
}

.header-dialog .parameter th:nth-child(2) {
    border-top-left-radius: 3px;
}

.header-dialog .parameter th:first-child {
    border-top-left-radius: 3px;
}

.header-dialog .parameter th:last-child {
    border-top-right-radius: 3px;
}

.header-dialog .parameter {
    margin-bottom: 10px;
}

.header-dialog input[type="number"]::-webkit-inner-spin-button {
    border: 0;
}

.header-dialog table {
    float: left;
    margin: 0px;
    border-collapse: collapse;
    width: calc(100% - -1px);
}

.header-dialog .gui_box {
    margin-bottom: 0px;
}

.header-dialog table, .header-dialog table td {
    padding: 1px;
    border-bottom: 0px solid #ccc;
}

.header-dialog table th {
    padding: 0px;
    border: 0px;
    font-weight: normal;
}

.header-dialog .pid_titlebar th {
    padding: 5px;
    text-align: left;
    border-right: 1px solid #ccc;
    width: calc(100% -1px);
}

.header-dialog .pid_titlebar th:first-child {
    text-align: left;
}

.header-dialog .pid_titlebar th:last-child {
    border-right: none;
}

.header-dialog table tr td:first-child {
    text-align: left;
    padding-left: 5px;
}

.header-dialog table tr td:last-child {
    border-right: 0px solid #ccc;
}

.header-dialog table td {
    padding: 1px;
    width: 25%;
    border-right: 1px solid #ccc;
}

.header-dialog table tr td {
    text-align: left;
    padding-left: 0px;
}

.header-dialog table input {
    display: block;
    width: calc(100% - 0px);
    height: 20px;
    line-height: 20px;
    text-align: right;
    border: 0px solid #ccc;
    border-radius: 0px;
}

.header-dialog .controller {
    float: left;
    width: calc(35% - 2px);
    margin-left: 0px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.header-dialog .controller .head {
    display: block;
    text-align: left;
    line-height: 20px;
    border-bottom: 1px solid #ccc;
    background-color: #828885;
    color: white;
    /* height: 20px; */
    font-weight: normal;
    padding: 2px;
    padding-left: 6px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.header-dialog .controller select {
    width: calc(100% - 2px);
    height: 20px;
    line-height: 20px;
}

.header-dialog .profile {
    float: left;
    width: calc(25% - 2px); /* - border*/
    border: 1px solid #ccc;
    border-radius: 3px;
}

.header-dialog .profile .head {
    display: block;
    text-align: left;
    line-height: 20px;
    border-bottom: 1px solid #ccc;
    background-color: #828885;
    color: white;
    height: 19px;
    font-weight: normal;
    padding: 2px;
    padding-bottom: 3px;
    padding-left: 6px;
}

.header-dialog .profile select {
    width: 100%;
    padding-left: calc(100% - 35px);
    height: 20px;
    line-height: 20px;
}

.header-dialog .pid_tuning .name {
    width: 25%;
}

.header-dialog .proportional {
    width: 25%;
}

.header-dialog .integral {
    width: 25%;
}

.header-dialog .derivative {
    width: 25%;
}

.header-dialog .parameter {
    float: right;
    width: calc(100% - 2px);
    margin-bottom: 10p;
}

.header-dialog .top-buttons {
    float: right;
}

.header-dialog .fixed_band {
    position: absolute;
    width: 100%;
    bottom: 0px;
}

.header-dialog .spacer_box {
    padding-bottom: 10px;
    float: left;
    width: calc(100% - 5px);
}

.pid_mode {
    width: 100%;
    height: 25px;
    background-color: #D6D6D6;
    float: left;
    margin: 0px;
    padding: 0px;
    text-align: left;
    padding-left: 5px;
    line-height: 13px;
    padding-top: 8px;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
    color: #828282;
    font-family: 'open_sans', Arial;
    background-image: linear-gradient(-45deg, rgba(255, 255, 255, .2) 10%, transparent 10%, transparent 20%,
        rgba(255, 255, 255, .2) 20%, rgba(255, 255, 255, .2) 30%, transparent 30%, transparent 40%,
        rgba(255, 255, 255, .2) 40%, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent 60%,
        rgba(255, 255, 255, .2) 60%, rgba(255, 255, 255, .2) 70%, transparent 70%, transparent 80%,
        rgba(255, 255, 255, .2) 80%, rgba(255, 255, 255, .2) 90%, transparent 90%, transparent 100%,
        rgba(255, 255, 255, .2) 100%, transparent);
}

.pid_titlebar {
    color: #fff;
    background-color: #828885;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    height: 20px;
}

.pid_titlebar td:first-child {
    text-align: left;
}

.show {
    width:110px; 
    float:right; 
    margin-right:3px;
}
    
.show a {
    margin-left: 10px;
    width: calc(100% - 10px);
}

.header-dialog .helpicon {
    margin-top: -1px;
}

.header-dialog .number .helpicon {
    margin-top: 3px;
    margin-right: 0px;
}

.header-dialog .gui_box_titlebar .helpicon {
    margin-top: 5px;
    margin-right: 5px;
}

.header-dialog .numberspacer {
    float: left;
    width: 65px;
    height: 21px;
}

.header-dialog .number {
    margin-bottom: 5px;
    clear: left;
    padding-bottom: 5px;
    border-bottom: 1px solid #ddd;
    width: 100%;
    float: left;
}

.header-dialog .number:last-child {
    padding-bottom: 5px;
    border-bottom: 0px;
}

.header-dialog .number input {
    width: 50px;
    padding-left: 3px;
    height: 20px;
    line-height: 20px;
    text-align: left;
    border: 1px solid silver;
    border-radius: 3px;
    margin-right: 11px;
    font-weight: normal;
}

.header-dialog .other table td,
.header-dialog .rxMode table td,
.header-dialog .rxFailsafe table td,
.header-dialog .batteryCurrent table td,
.header-dialog .batteryVoltage table td,
.header-dialog .esc table td,
.header-dialog .rssi table td
 {
    padding: 1px;
    border: 0px solid #ccc;
} 

.header-dialog .noline td {
    border: 0px solid #ccc;
}

.header-dialog .features input{
    width: 50px;
    padding-left: 3px;
    height: 20px;
    line-height: 20px;
    text-align: left;
    border: 0px solid silver;
    border-radius: 3px;
    margin-right: 11px;
    font-weight: normal;
}

.header-dialog .features label {
    width: 70px;
    padding-left: 3px;
    height: 20px;
    line-height: 20px;
    text-align: left;
    border: 0px solid silver;
    border-radius: 3px;
    margin-right: 11px;
    font-weight: normal;
    font-size: 13px;
}

.header-dialog .features span {
    padding-right: 3px;
    height: 20px;
    line-height: 20px;
    text-align: left;
    border: 0px solid silver;
    border-radius: 3px;
    margin-right: 11px;
    font-weight: normal;
    font-size: 11px;
}

.header-dialog .gui_box span {
    font-style: normal;
    font-family: 'open_sansregular', Arial;
    line-height: 19px;
    color: #7d7d7d;
    font-size: 11px;
}

.noline {
	border:0px;
}
   
#content-watermark {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
    background-image: url("../images/light-wide-2.svg");
    background-repeat: no-repeat;
    background-position: 95% 20%;
    background-size: 430px;
    height: 174px;
    opacity: 0.15;
}

.header-dialog .resetbt {
    width: 140px; 
    float: right;
}

.header-dialog .right {
    float: right;
}

.header-dialog .pids {
    float: left;
    width: 25%;
}

.header-dialog .leftzero {
    padding-left: 0px;
}

.header-dialog .tpa-breakpoint {
    border-top-left-radius: 0px;
}

.header-dialog .roll {
    border-bottom-left-radius: 3px;
}

.header-dialog .pidTuningLevel {
    float: left;
}

.header-dialog .borderleft {
    border-top-left-radius: 3px; 
    border-top-right-radius: 3px;
}

.header-dialog .textleft {
    width: 25%; 
    float: left; 
    text-align: left;
}

.header-dialog .topspacer {
    margin-top:15px;
}