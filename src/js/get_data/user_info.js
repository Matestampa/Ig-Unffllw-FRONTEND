import {userInfo_request} from "./requests/requests.js"
import {general_errorHandler,specific_errorHandler} from "./error_handler/handler.js"

async function get_userInfo(username){
    
    //hacer request
    let error,data;
    //error={code:"RETRY",message:"tu vieja"};
    let retry;
    do{ 
        retry=false;

        ({error,data}=await userInfo_request(username));

        //chequear errors
        if (error){
    
            //si no hay sub_code quiere decir que es general
            if (!error.sub_code){
                //si aca da true, ponemos el coso para hacer retry.
                retry=general_errorHandler(error);
                console.log(retry);
            }
            //si hay, es especifico
            else{
                specific_errorHandler(error); 
    
            }
        }
        else{
            return {user_id:data.user_id,cant_followers:data.cant_followers};
        }
        attempts++
    }
    while(retry);

}

export{get_userInfo};