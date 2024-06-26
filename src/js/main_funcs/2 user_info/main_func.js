import {get_Manager} from "../../app.js";

import { get_userInfo } from "../../get_data/user_info.js";

import { get_sharedButton } from "../ui_shared.js";

import { show_userInfo , LOADING} from "./ui.js";


async function main_get_userInfo(){
    //Obtener username
    let username=document.getElementById('username_input').value;
    
    let shared_button=get_sharedButton();
    
    //Traer data
    LOADING.start();
    shared_button.disable();
    
    let data=await get_userInfo(username);

    LOADING.finish();
    shared_button.enable();
    
    //Si no hubo errors, y tenemos la data
    if (data){
        
        //Mostrar data
        show_userInfo(username,data.cant_followers);

        //Pasarle al Main Manager la data.
        let Main_Manager=get_Manager();
        Main_Manager.finished_user_info(username,data.user_id,data.cant_followers);
    }
}

export {main_get_userInfo};