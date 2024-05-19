import {IG_REQUESTS_BASEURL} from "../../config.js"
import {GENERAL_ERRORS} from "../error_handler/handler.js";


const BASE_URL=IG_REQUESTS_BASEURL;

const USERINFO_ENDP="/user_info/";

const FOLLOWERS_ENDP="/nexts";


async function userInfo_request(username){

    let final_url=USERINFO_ENDP+username
    
    let response,json_data;
    try{
        response=await fetch(final_url,{
            method:"GET"
        })

        json_data=await response.json();

        if (response.status==200){
            return {error:undefined,data:json_data};
        }
        else{
            return {error:json_data.error,data:undefined};
        }
    }
    catch(e){
        let req_error=request_errorHandler(e);
        return {error:req_error,data:undefined}
    }
}

async function followers_request(user_id,last_cursor){
    
    let final_url=FOLLOWERS_ENDP;
    
    let response,json_data;
    try{
        response=await fetch(final_url,{
            method:"GET",
            body:JSON.stringify({user_id,last_cursor})
        })

        json_data=await response.json();

        if (response.status==200){
            return {error:undefined,data:json_data};
        }
        else{
            return {error:json_data.error,data:undefined};
        }
    }
    
    catch(e){
        let req_error=request_errorHandler(e);
        return {error:req_error,data:undefined}
    }
}


//handler para errores propios de fetch
function request_errorHandler(error){
    console.log(error);
    
    //Devolvemos siempre uno de tipo server. Pase lo q pase.
    return {code:GENERAL_ERRORS.SERVER,message:"There was an error. Try Again"};
}


export {userInfo_request,followers_request};