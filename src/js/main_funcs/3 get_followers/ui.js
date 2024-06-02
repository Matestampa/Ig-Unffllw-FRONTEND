function setUI_getFollowers(){}



//---------------------------- Loading mientras se trae la data ---------------

let curr_progressBar;

function start_loading(){
    //Poner texto y animacion
    console.log("cargando followers")
    //Iniciar una progress bar
    let elem=document.getElementById("progress_bar")
    curr_progressBar=getEmpty_progressBar(elem);
}

function update_loadingPerc(actual,total){
    
    //sacar porcentaje
    let perc=parseInt(actual*100 / total);
    curr_progressBar.update_progress(perc);

}

function finish_loading(){
    //Borrar texto y animacion
    console.log("dejo de cargar followers")
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

export {setUI_getFollowers,LOADING};