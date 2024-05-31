function setUI_compare_followers(){
    let HTML=`<p id="unfollowers_cant">Lost Followers:</p>
              <ul id="unfollowers_list"></ul>`
    
    let mainDiv=document.getElementById("compareFoll_mainDiv");
    mainDiv.innerHTML=HTML;
}


function show_lostFoll(lostFollArr){
    
    //Poner cuanta cantidad se trajo
    let cant=lostFollArr.length;

    document.getElementById("unfollowers_cant").innerText+=cant;
    
    //Mostrar lista con los unfollowers
    let unfollowers_list=document.getElementById("unfollowers_list");

    lostFollArr.forEach(foll=>{
        let follLi=document.createElement("li");
        follLi.innerText=foll;
        unfollowers_list.appendChild(follLi);
    });
}

export {setUI_compare_followers,show_lostFoll};