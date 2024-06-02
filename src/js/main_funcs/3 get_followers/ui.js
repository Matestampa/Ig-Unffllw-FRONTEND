import {get_sharedButton} from "../ui_shared.js";
import { main_get_followers } from "./main_func.js";

function setUI_getFollowers(){
    let HTML=`<div style="display: none" class="loading-container" id="loading_container">
                <div class="loading-text">Cargando</div>
                <div class="spinner"></div>
              </div>
              <div id="progressBar_container">
                 <div id="progress_bar">Hola</div>
              </div>`;
    
    //Cambiar el texto y callback del shared button, q ya uso "user_info"
    let sharedButton=get_sharedButton();
    sharedButton.change_text("Get Followers");
    sharedButton.change_callback(main_get_followers);
    
    //Meter html de la func
    let mainDiv=document.getElementById("getFoll_mainDiv");
    mainDiv.innerHTML=HTML;
}


function removeUI_getFollowers(){
    document.getElementById("progressBar_container").innerHTML="";
}

//---------------------------- Loading mientras se trae la data ---------------

let curr_progressBar;

function start_loading(){
    //Poner texto y animacion
    document.getElementById("loading_container").style.display="flex";
    //Iniciar una progress bar
    let elem=document.getElementById("progress_bar")
    curr_progressBar=getEmpty_progressBar(elem);
}

function update_loadingPerc(actual,total){
    console.log(actual,total);
    //sacar porcentaje
    let perc=parseInt(actual *100 / total);
    curr_progressBar.update_progress(perc);

}

function finish_loading(){
    //Borrar texto y animacion
    document.getElementById("loading_container").style.display="none";
    //borrar o reiniciar progress bar
    curr_progressBar.update_progress(0);
}

const LOADING={
    start:start_loading,
    update:update_loadingPerc,
    finish:finish_loading
};


//-------------------------- ProgressBar ---------------------------------------------
class Progress_Bar{
    constructor(progressBar_elem){
        this.bar=progressBar_elem;
    }

    update_progress(percentage){

        if (percentage >= 0 && percentage <= 100){
            this.bar.style.width=percentage+"%";
            this.bar.innerText=percentage+"%";
        }
    }
}


let ProgressBar;

//se reemplaza el obj anterior, con uno vacio
function getEmpty_progressBar(progressBar_elem){
    ProgressBar=new Progress_Bar(progressBar_elem);
    return ProgressBar;
}

//se crea uno nuevo
function new_progressBar(progressBar_elem){
    return new Progress_Bar(progressBar_elem);
}

//-------------------------------------------------------------------------------------

export {setUI_getFollowers,LOADING,removeUI_getFollowers};