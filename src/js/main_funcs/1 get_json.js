import {get_Manager} from "../app.js";


function setUI_get_json(){

}


//Seria llamada por un button
async function main_get_json(event){
    let file = event.target.files[0];

    if (util_checkFile(file)) {
        
        let jsonObj;
        try{
            jsonObj=await util_readJson(file) 
        }
        catch(e){
            window.alert("Mal formato")
        }
        

        if (!util_checkJsonFormat(jsonObj)){
            window.alert("Mal formato")
        }

        get_Manager().finished_get_json(jsonObj);

    } 
    else {
       window.alert("Mal formato")
    }
}


//chequear el tipo de archivo
function util_checkFile(file){
    if (file && file.type === 'application/json'){
        return true;
    }
    return false;
}

//leer el json
function util_readJson(file){
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = function(e) {
          try {
            const jsonContent = JSON.parse(e.target.result);
            resolve(jsonContent);
          } catch (error) {
            reject(false);
          }
        };
        reader.onerror = function() {
          reject(false);
        };
        
        reader.readAsText(file);
    });
}

//chequear si cumple con nuestro formato
function util_checkJsonFormat(jsonObj){
    
    if (jsonObj["username"] && jsonObj["followers"]){
        return true;
    }

    return false;
}

const GET_JSON={
    UI:setUI_get_json,
    MAIN_FUNC:main_get_json
}


export {GET_JSON};