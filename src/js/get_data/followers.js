import {followers_request} from "./requests/requests.js";
import {general_errorHandler,specific_errorHandler} from "./error_handler.js"



async function get_followers(user_id,last_cursor){
    
    //hacer request
    let retry;
    let error,data;
    do{ 
        retry=false; 
        
        //hacer request, con user_id y cursor.
        ({error,data}=await followers_request(user_id,last_cursor));
          
        //chequear errors (capaz pasa el de retry)
        if (error){
    
            //si no hay sub_code quiere decir que es general
            if (!error.sub_code){
                //si aca da true, ponemos el coso para hacer retry.
                retry=general_errorHandler(error);
            }
            //si hay, es especifico
            else{
                specific_errorHandler(error); 
    
            }
        }
        else{
            //si no hay return de la data
            return {followers:data.followers,last_cursor:data.last_cursor};
        }
    }

    //Mientras haya retry
    while(retry)
}

export {get_followers};