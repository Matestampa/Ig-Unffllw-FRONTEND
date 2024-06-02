import {main_download} from "./main_func.js";

function setUI_download(){
   let button_text="Download file with your latest followers"
   let HTML=`<button id="download_button">${button_text}</button>`;

   let mainDiv=document.getElementById("download_mainDiv")

   mainDiv.innerHTML=HTML;

   document.getElementById("download_button").addEventListener("click",main_download);
}

export {setUI_download};