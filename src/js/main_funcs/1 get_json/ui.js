import {main_get_json} from "./main_func.js";

function setUI_get_json(){
    let HTML=`<label for="Input" id="jsonInput-label">
    Subir archivo JSON
    <input type="file" id="jsonInput" accept=".json" class="file-input">
    </label>`

    let container=document.getElementById("getJson_mainDiv");
    container.innerHTML=HTML;

    document.getElementById("jsonInput").addEventListener("change",main_get_json);
}




export {setUI_get_json};