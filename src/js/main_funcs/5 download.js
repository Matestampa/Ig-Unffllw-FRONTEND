import { get_Manager } from "../app.js";


function setUI_download(){

}


function main_download(new_followers){

    //let {username}=get_Manager().get_lastUser_data()
    let username="manu";

    //Crear nombre del json
    let file_name=create_jsonName(username);

    //Crear url para descargar el json
    let file_url=create_jsonUrl(new_followers);

    console.log(file_name,file_url);

    //Añadir url y nombre al ui
    let link=document.createElement("a");
    link.innerText="Download";
    link.href=file_url;
    link.download=file_name;
    
    document.body.appendChild(link);

}

function create_jsonUrl(object){
     //Convertir json a string 
     let jsonString=JSON.stringify(object);

     //crear un blob con el string
     let blob=new Blob([jsonString],{type:"application/json"});

     //crear data del enlace
     let url=URL.createObjectURL(blob);

     return url;  
}

function create_jsonName(username){

     let today_date=util_getDateString();

     return `${username}''Foll--${today_date}.json`;
}

function util_getDateString(){
    let today=new Date();

    let dia=String(today.getDate())
    let mes=String(today.getMonth() + 1).padStart(2, '0');
    let year=String(today.getFullYear());

    return `${dia}_${mes}_${year}`;
}


let testObj={
   1:"manu",
   2:"yapu",
   90:"peluk",
   3:"pavel",

}

window.test=()=>{
    main_download(testObj);
}



const DOWNLOAD={
    UI:setUI_download,
    MAIN_FUNC:main_download
}

export {DOWNLOAD};