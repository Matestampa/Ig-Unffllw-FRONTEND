
class Shared_Button {
    constructor(buttonElem){
        this.button=buttonElem;
    }

    change_text(text){
        this.button.innerText=text;
    }

    change_callback(new_callback){
        if (this.actual_callback){
            this.button.removeEventListener('click', this.actual_callback);
        }
        else{
            this.actual_callback=new_callback
        }

        this.button.addEventListener("click",new_callback);
    }

    enable(){
        this.button.disabled=false;
    }

    disable(){
        this.button.disabled=true;
    }

    appear(){
        this.button.style.visibility="visible"
    }

    disappear(){
        this.button.style.visibility="hidden"
    }
}

let SharedButton;

function create_sharedButton(buttonElem){
    SharedButton=new Shared_Button(buttonElem);
    return SharedButton;
}

function get_sharedButton(){
    return SharedButton;
}

export {create_sharedButton,get_sharedButton};