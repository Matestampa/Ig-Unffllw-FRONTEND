import {get_Manager} from "../../app.js";

import { get_userInfo } from "../../get_data/user_info.js";


async function main_get_userInfo(){
    //Obtener username
    let username=document.getElementById('inputUsername').value;
    
    //Traer data
    let data=await get_userInfo(username);
    
    //Si no hubo errors, y tenemos la data
    if (data){
        
        //Pasarle al Main Manager la data.
        let Main_Manager=get_Manager();
        Main_Manager.finished_user_info(username,data.user_id,data.cant_followers);
    }
}

export {main_get_userInfo};