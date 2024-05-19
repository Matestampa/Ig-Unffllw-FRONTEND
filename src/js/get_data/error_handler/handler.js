import {AFTER_ERR_FUNCS} from "./after_errors.js";


const GENERAL_ERRORS={
    BAD_REQ:"BAD_REQ",
    SERVER: "SERVER",
    NOT_AUTH: "NOT_AUTH",
    RETRY:"RETRY"
}

function general_errorHandler(error){

    //Acceder al message, etc y si tiene data (aunque los generales no deberian tener)
    let errorCode=error.code;
    let errMessage=error.message;

    if (errorCode==GENERAL_ERRORS.BAD_REQ){
        //mostrar cuadro de texto o algo
       AFTER_ERR_FUNCS.alert_and_giveRetry(errMessage)
    };

    if (errorCode==GENERAL_ERRORS.SERVER){
        AFTER_ERR_FUNCS.alert_and_giveRetry(errMessage);
    };

    if (errorCode==GENERAL_ERRORS.NOT_AUTH){
        //VER Q ONDA ****
    };
    
    //si es de retry, devolvemos true para q lo sepa
    if (errorCode==GENERAL_ERRORS.RETRY){
        return true;
    };
}

//-----------------------------------------------------------------------------------

const SPECIFIC_ERRORS={
    PRIVATE_ACCOUNT:"PRIVATE_ACCOUNT",
    FOLL_EXCESS:"FOLL_EXCESS",
    NOMORE_REQ:"NOMORE_REQ",
    REQUESTS_DISABLED:"REQUESTS_DISABLED"
};

//este deberia ser individual para cada funcionalidad del front.
//en nuesro caso, como tenemos 1 sola, usariamos uno solo
function specific_errorHandler(error){
     let errorCode=error.sub_code;
     let errorMessage=error.message;

     if (errorCode==SPECIFIC_ERRORS.PRIVATE_ACCOUNT ||
         errorCode==SPECIFIC_ERRORS.FOLL_EXCESS){
         
         AFTER_ERR_FUNCS.alert_and_giveRetry(errorMessage);
     }

     if (errorCode==SPECIFIC_ERRORS.NOMORE_REQ){
        AFTER_ERR_FUNCS.after_NOMORE_REQ();
     }

     if (errorCode==SPECIFIC_ERRORS.REQUESTS_DISABLED){
        AFTER_ERR_FUNCS.after_REQUESTS_DISABLED();
     }
};


export {general_errorHandler,specific_errorHandler,GENERAL_ERRORS};