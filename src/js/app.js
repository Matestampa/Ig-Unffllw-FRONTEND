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

       this.start();
    }

    start(){
      //inicializar todas las variables, poner el ui de user_info etc.
      this.OLD_FOLLOWERS={};
      this.NEW_FOLLOWERS={},

      this.last_userId=undefined;
      this.last_cantFoll=undefined;

      this.uploaded_json=false;
    }

    finished_get_json(){
      //marcar q se subio un json
      this.uploaded_json=true;
    }


    finished_user_info(user_id,cant_foll){
      //inicar ui de get_followers
      this.last_userId=user_id;
      this.last_cantFoll=cant_foll;
    }

    finished_get_followers(new_followers){
      //iniciar ui de descargas
      //tmb se podria guardar en 

      //si se subio json:
      //-- iniciar ui de compare_followers
      //-- iniciar funcion de compare_followers
    }

    finished_compareFollowers(){
      //por ahora no hace nada. (la main de compare followers se va a encargar de
      //                        comparar y meter los nombres en el ui)
    }

    finished_download(){ //(seria si se toco cancel o dale de descargar)
      //this.start()
    }
    
    //Poner pagina en mode de falta de requests
    set_pageStatus_NOMOREREQ(){
       
      //Poner ui con cronometro
      //tomar el expire de las cookies para eso
    }
    
    //Poner pagina en mode no disponible (por tema del server)
    set_pageStatus_UNAVAILABLE(){
      
      //Poner un ui q no deje hacer nada
    
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
