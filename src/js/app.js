import { get_userInfo } from "./get_data/user_info.js";
import { get_followers } from "./get_data/followers.js";


//--------------------- Vars a reiniciar con cada intento ----------------------------
let OLD_FOLLOWERS; //este veddria del JSON
let NEW_FOLLOWERS={}

let last_userId;
let last_cantFoll;

//----------------------------------------------------------------------------------
//user sin conexion=> message=="failed to fetch"
//no anda server, lo mismo.
//prohibir q el user use la app sin internte.
//cuando tire error de fetch va a ser por mal server si o si.
//(poner q lo intente mas tarde y listo ya foe)


async function main_get_userInfo(){
    
    //Obtener username
    let username=document.getElementById('inputUsername').value;
    
    //Traer data
    let data=await get_userInfo(username);
    
    //Si no hubo errors, y tenemos la data
    if (data){
        //guardar "user_id" y "cant_followers", para usarlo en la de followers
        last_userId=data.user_id;
        last_cantFoll=data.cant_followers;

        //mostrar info ****
        console.log(last_userId,last_cantFoll);

        //cambiar el escenario para la de followers ****
    }
}

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


function main_compareFollowers(){
    //comparar los viejos con los nuevos

    //si hay, modificar escenario para mostrarlos.
} 


function main_downloadJSON(){
    //meter data de new followers a JSON, con el username tmb.

    //hacerlo descargable
}

window.userInfo=main_get_userInfo;
window.followers=main_get_followers;
