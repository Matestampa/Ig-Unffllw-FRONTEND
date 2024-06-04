import {create_sharedButton,LOADING_ANIM} from "../ui_shared.js";
import { main_get_userInfo } from "./main_func.js";

function setUI_userInfo(username){
      
      let HTML=`<div id="showUserInfo_cont">
                    <p id="showUserInfo"></p>
                </div>
                ${LOADING_ANIM.element}
                <input type="text" id="username_input" placeholder="Enter ig username">
                <button id="getData_button">user_info</button>`
      document.getElementById("userInfo_mainDiv").innerHTML=HTML;

      let text_inInput=username? username : "";
      document.getElementById("username_input").value=text_inInput;

      let shared_button=create_sharedButton(document.getElementById("getData_button"));
      shared_button.change_callback(main_get_userInfo);
}

function show_userInfo(username,cant_followers){
     
      let userInfo_space=document.getElementById("showUserInfo");

      let text=`User @${username} with ${cant_followers} followers`;

      userInfo_space.innerText=text;

}

//---------------------- LOADING mientras trae la data ------------------------

function start_loading(){
  LOADING_ANIM.start();
}

function finsish_loading(){
  LOADING_ANIM.finsish();
}

const LOADING={
      start:start_loading,
      finish:finsish_loading
}

//----------------------------------------------------------------------------

export {setUI_userInfo,show_userInfo,LOADING};