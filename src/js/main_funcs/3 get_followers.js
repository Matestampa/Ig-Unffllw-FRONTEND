import {get_followers} from "../get_data/followers.js";


function setUI_getFollowers(){}




async function main_get_followers(){
    //Tomar data de la request de lo de user_info
    let user_id=last_userId;
    let cant_foll=last_cantFoll;
    
    //Traer followers haciendo todas las requests
    let totalBringed_foll,partialBringed_foll; //foll traidos en total, y por request
    let last_cursor;

    let ok=true;
    //Hacer bucle
    do{ 
        //Traer data
        let data=await get_followers(user_id,last_cursor)
        
        //Si no hay data es que hubo error
        if (!data){ok=false;break;}

        //Ir actaulizando los NEW_FOLLOWERS.
        NEW_FOLLOWERS={...NEW_FOLLOWERS,...data.followers};
    
        //calcular porcentaje segun foll traidos, y last_cantFoll,  y actualizar barra.
        partialBringed_foll=Object.keys(data.followers).length;
        totalBringed_foll+=partialBringed_foll;
        
        //update_progressBar(totalBringed_foll) ****
    }
    //Mientras la cant de traidos sea menor a la cantidad actual q tiene.
    while(totalBringed_foll<cant_foll)
    
    if (ok){ 
       //Llamar a funcion q haga comparacion de followers. ****
       //(si es que se subio previamente un JSON)
       //si no mandar directo lo del JSON 
    }
}


const GET_FOLLOWERS={
    SET_UI:setUI_getFollowers,
    MAIN_FUNC:main_get_followers
}

export {GET_FOLLOWERS}