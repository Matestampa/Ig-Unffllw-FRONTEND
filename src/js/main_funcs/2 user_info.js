import { get_userInfo } from "../get_data/user_info.js";


function setUI_userInfo(){}




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

const USER_INFO={
    SET_UI:setUI_userInfo,
    MAIN_FUNC:main_get_userInfo,
}

export{USER_INFO};