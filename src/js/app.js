import {USER_INFO} from "./main_funcs/2 user_info.js";

//-------------------------- CLASE MANAGER PARA CONTROLAR EL FLUJO DE LA PAG ---------------

let Manager;

class Main_Manager{
    constructor(){
       this.OLD_FOLLOWERS={};
       this.NEW_FOLLOWERS={},

       this.last_userId;
       this.last_cantFoll;

       this.uploaded_json;
    }

    start(){
      //inicializar todas las variables, poner el ui de user_info etc.
    }

    finished_get_json(){
      //marcar q se subio un json
    }


    finished_user_info(){
      //inicar ui de get_followers
    }

    finished_get_followers(){
      //iniciar ui de descargas
      //tmb se podria guardar en 

      //si se subio json:
      //-- iniciar ui de compare_followers
      //-- iniciar funcion de compare_followers
    }


}

function get_Manager(){
  return Manager;
}

window.onload=()=>{
  Manager=new Main_Manager();
  Manager.start();
}



export {get_Manager};
