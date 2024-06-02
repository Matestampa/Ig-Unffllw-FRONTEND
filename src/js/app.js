import { GET_JSON } from "./main_funcs/1 get_json/index.js";
import {USER_INFO} from "./main_funcs/2 user_info/index.js";
import {GET_FOLLOWERS} from "./main_funcs/3 get_followers/index.js";
import {COMPARE_FOLLOWERS} from "./main_funcs/4 compare_foll/index.js";
import { DOWNLOAD } from "./main_funcs/5 download/index.js";

import {setUI_initial} from "./ui_general.js";

//-------------------------- CLASE MANAGER PARA CONTROLAR EL FLUJO DE LA PAG ---------------

let Manager;

class Main_Manager{
    constructor(){
       this.OLD_FOLLOWERS={};
       this.NEW_FOLLOWERS={}
       this.lastUser_data={}
       this.uploaded_json;

       this.mainFuncs_div=document.getElementById("mainFuncs_div")

       this.start();
    }

    start(){
      //inicializar todas las variables, poner el ui de user_info etc.
      this.___reset_vars();
      setUI_initial(this.mainFuncs_div);
      
      //iniciar UI get_json
      GET_JSON.SET_UI();
      //iniciar UI user_info
      USER_INFO.SET_UI();
    
    }

    finished_get_json(json_data){
      this.OLD_FOLLOWERS=json_data.followers;
      this.uploaded_json=true;

      console.log("Finished get json");

      //Poner en el ui json_data.username;
      USER_INFO.SET_UI(json_data.username);
    }


    finished_user_info(username,user_id,cant_foll){
      this.lastUser_data.username=username;
      this.lastUser_data.user_id=user_id;
      this.lastUser_data.cant_followers=cant_foll;
      
      console.log(`Finished user_info with data:${this.lastUser_data}`)
      console.log(`Starting get_followers`)
      //inicar ui de get_followers
    }

    finished_get_followers(new_followers){
      console.log(`Finished get_followerss`)
      console.log(`Starting compare_followers OR download`)
      
      this.NEW_FOLLOWERS=new_followers;
      
      //Si se subio json previo con followers
      if (this.uploaded_json){
        
        //-- iniciar ui de compare_followers
        COMPARE_FOLLOWERS.SET_UI();
        //-- iniciar funcion de compare_followers
        COMPARE_FOLLOWERS.MAIN_FUNC(this.OLD_FOLLOWERS,this.NEW_FOLLOWERS);
      }
      
      //iniciar ui de descargas
      DOWNLOAD.SET_UI();
      //tmb se podria guardar en 

    }

    finished_compareFollowers(){
      //por ahora no hace nada. (la main de compare followers se va a encargar de
      //                        comparar y meter los nombres en el ui)
    }

    finished_download(){ //(seria si se toco cancel o dale de descargar)
      //this.start()
    }

    get_lastUser_data(){
      return this.lastUser_data;
    }

    get_newFollowers(){
      return this.NEW_FOLLOWERS;
    }
    
    //Poner pagina en mode de falta de requests
    set_pageStatus_NOMOREREQ(){
      console.log("NO MORE REQUESTS STATUS FROM MAIN_MANAGER") 
      //Poner ui con cronometro
      //tomar el expire de las cookies para eso
    }
    
    //Poner pagina en mode no disponible (por tema del server)
    set_pageStatus_UNAVAILABLE(){
      console.log("UNAIVALABLE PAGE STATUS FROM MAIN_MANAGER")
      //Poner un ui q no deje hacer nada
    
    }

    ___reset_vars(){
      this.OLD_FOLLOWERS={};
      this.NEW_FOLLOWERS={};

      this.lastUser_data={
        username:undefined,
        user_id:undefined,
        cant_followers:undefined
      }

      this.uploaded_json=false;
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
