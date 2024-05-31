

function setUI_initial(cont){
   let HTML=`<div id="userInfo_mainDiv"></div>
            <div id="getFoll_mainDiv"></div>
            <div id="afterGetData_mainDiv">
                <div id="compareFoll_mainDiv"></div>
            <div id="download_mainDiv"></div>
            </div>`
    cont.innerHTML=HTML;
}


export {setUI_initial};