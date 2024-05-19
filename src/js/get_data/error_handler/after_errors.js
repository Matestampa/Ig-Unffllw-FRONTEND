

function alert_and_giveRetry(message){
    window.alert(`${message}. Try Again`);
}

function after_NOMORE_REQ(){
    //desactivar todo, mostrar tiempo hasta estar habilitado de nuevo
    //(o llamar a clase con metodo que lo haga)
}

function after_REQUESTS_DISABLED(){
    //desacivar todo, poner html q diga q el server no esta disponible
    //(o llamar a clase con metodo q lo haga)
}

const AFTER_ERR_FUNCS={
    alert_and_giveRetry,
    after_NOMORE_REQ,
    after_REQUESTS_DISABLED
}

export {AFTER_ERR_FUNCS};