import {USER_INFO} from "./main_funcs/2 user_info.js";
import {GET_FOLLOWERS} from "./main_funcs/3 get_followers.js";
import {COMPARE_FOLLOWERS} from "./main_funcs/4 compare_foll.js";

//-------------------------- CLASE MANAGER PARA CONTROLAR EL FLUJO DE LA PAG ---------------

let Manager;

class Main_Manager{
    constructor(){
       this.OLD_FOLLOWERS={};
       this.NEW_FOLLOWERS={},

       this.lastUser_data={}

       this.uploaded_json;

       this.start();
    }

    start(){
      //inicializar todas las variables, poner el ui de user_info etc.
      this.OLD_FOLLOWERS={};
      this.NEW_FOLLOWERS={},

      this.lastUser_data={
        username:undefined,
        user_id:undefined,
        cant_followers:undefined
      }

      this.uploaded_json=false;
    }

    finished_get_json(){
      //marcar q se subio un json
      this.uploaded_json=true;
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

        //-- iniciar funcion de compare_followers
        COMPARE_FOLLOWERS.MAIN_FUNC(this.OLD_FOLLOWERS,this.NEW_FOLLOWERS);
      }
      
      //iniciar ui de descargas
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


}

function get_Manager(){
  return Manager;
}

window.onload=()=>{
  Manager=new Main_Manager();
  Manager.start();
  console.log(Manager);
}



export {get_Manager};
