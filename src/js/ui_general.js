import {get_Manager} from "./app.js";

function setUI_initial(cont){
   let HTML=`<div id="getJson_mainDiv"></div>
            <div id="userInfo_mainDiv"></div>
            <div id="getFoll_mainDiv"></div>
            <div id="afterGetData_mainDiv">
                <div id="compareFoll_mainDiv"></div>
                <div id="download_mainDiv"></div>
                <div id="retry_mainDiv"></div>
            </div>`
    cont.innerHTML=HTML;
}


//-------------------- Retry func ------------------------------------------

function setUI_retry(){
    let button_text="Retry"
    let HTML=`<button id="retry_button">${button_text}</button>`;
   
   let mainDiv=document.getElementById("retry_mainDiv");
   mainDiv.innerHTML=HTML;

   document.getElementById("retry_button").addEventListener("click",main_retry);
}

function main_retry(){
   get_Manager().retry();
}

//----------------------------------------------------------------------------

export {setUI_initial,setUI_retry};