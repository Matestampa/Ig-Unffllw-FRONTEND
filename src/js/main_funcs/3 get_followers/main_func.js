import {get_followers} from "../../get_data/followers.js";
import { LOADING } from "./ui.js";


async function main_get_followers(){
    //Tomar data de la request de lo de user_info
    let MainManager=get_Manager();
    let {user_id,cant_followers}=MainManager.get_lastUser_data();

    //
    let NEW_FOLLOWERS={};
    
    //Traer followers haciendo todas las requests
    let totalBringed_foll,partialBringed_foll; //foll traidos en total, y por request
    let last_cursor;

    let ok=true;

    //Hacer bucle
    LOADING.start();
    do{ 
        //Traer data
        let data=await get_followers(user_id,last_cursor)
        
        //Si no hay data es que hubo error
        if (!data){ok=false;break;}

        //Ir actaulizando los NEW_FOLLOWERS.
        NEW_FOLLOWERS={...NEW_FOLLOWERS,...data.followers};

        //Actualizar last_cursor
        last_cursor=data.last_cursor;
    
        //calcular porcentaje segun foll traidos, y last_cantFoll,  y actualizar barra.
        partialBringed_foll=Object.keys(data.followers).lenght;
        totalBringed_foll+=partialBringed_foll;
        
        LOADING.update(totalBringed_foll,cant_followers);
    }
    //Mientras la cant de traidos sea menor a la cantidad actual q tiene.
    while(totalBringed_foll<cant_followers)
    
    LOADING.finish();

    if (ok){
        MainManager.finished_get_followers(NEW_FOLLOWERS);
    }
}

export {main_get_followers};