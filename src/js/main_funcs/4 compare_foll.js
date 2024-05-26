import {get_Manager} from "../app.js";


function setUI_compare_followers(){

}


function main_compare_followers(old_followers,new_followers){
     //llamar a func que compara posta
     let lost_foll=get_lostFoll(old_followers,new_followers);

     //si hay unfollowers, mostrarlos
     if (lost_foll.length>0){
         console.log("Hay unfollowers")
         console.log(lost_foll);
     }
     
     else{ //si no, mostrar mensaje de que no hay.
        console.log("No hay unfollowers")
     }

     get_Manager().finished_compareFollowers();


}

//Return usernames de unfollowers
function get_lostFoll(old_foll,new_foll){
    let lost_foll=[];

    for (let oldFoll_id of Object.keys(old_foll)){
        
        if (new_foll[oldFoll_id]==undefined){
           lost_foll.push(old_foll[oldFoll_id]);
        }
    }

    return lost_foll;
}


const COMPARE_FOLLOWERS={
    SET_UI:setUI_compare_followers,
    MAIN_FUNC:main_compare_followers
}

export {COMPARE_FOLLOWERS};