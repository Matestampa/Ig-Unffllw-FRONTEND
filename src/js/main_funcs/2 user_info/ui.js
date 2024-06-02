import {create_sharedButton} from "../ui_shared.js";
import { main_get_userInfo } from "./main_func.js";

function setUI_userInfo(){      
      let HTML=`<button id="getData_button">user_info</button>`
      document.getElementById("userInfo_mainDiv").innerHTML=HTML;

      let shared_button=create_sharedButton(document.getElementById("getData_button"));
      shared_button.change_callback(main_get_userInfo);
}

export {setUI_userInfo};