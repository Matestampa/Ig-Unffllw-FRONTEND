//----------------------------------------------------------------------------------
//user sin conexion=> message=="failed to fetch"
//no anda server, lo mismo.
//prohibir q el user use la app sin internte.
//cuando tire error de fetch va a ser por mal server si o si.
//(poner q lo intente mas tarde y listo ya foe)


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
