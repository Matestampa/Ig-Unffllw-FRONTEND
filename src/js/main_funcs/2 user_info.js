import {get_Manager} from "../app.js";

import { get_userInfo } from "../get_data/user_info.js";


function setUI_userInfo(){}




async function main_get_userInfo(){
    //Obtener username
    let username=document.getElementById('inputUsername').value;
    
    //Traer data
    let data=await get_userInfo(username);
    
    //Si no hubo errors, y tenemos la data
    if (data){
        
        //Pasarle al Main Manager la data.
        let Main_Manager=get_Manager();
        Main_Manager.finished_user_info(data.user_id,data.cant_followers);
    }
}

const USER_INFO={
    SET_UI:setUI_userInfo,
    MAIN_FUNC:main_get_userInfo,
}

export{USER_INFO};