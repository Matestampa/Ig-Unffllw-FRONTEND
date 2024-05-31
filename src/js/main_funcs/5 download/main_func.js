import { get_Manager } from "../../app.js";



function main_download(){
    
    let Manager=get_Manager();
    let {username}=Manager.get_lastUser_data()
    let new_followers=Manager.get_newFollowers();

    //Crear nombre del json
    let file_name=create_jsonName(username);

    //Crear formato y url para descargar json
    let formattedObj={
        username:username,
        followers:new_followers
    };
    let file_url=create_jsonUrl(formattedObj);

    //Añadir url y nombre al ui
    let link=document.createElement("a");
    link.href=file_url;
    link.download=file_name;
    link.click();

    Manager.finished_download();
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

export {main_download};