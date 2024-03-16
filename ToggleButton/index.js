let isToggle = false;
function toggle(){
    if(isToggle){
        toggleBlack();
        isToggle = false;
    }else{
        toggleWhite();
        isToggle = true;
    }
}

function toggleWhite(){
    document.getElementsByClassName("btn")[0].classList.add("changeBtn");
    document.getElementsByClassName("ball")[0].classList.add("changeBall");
    document.getElementsByTagName("p")[0].classList.add("changeText");
    document.getElementsByTagName("body")[0].classList.add("changeBack");
}

function toggleBlack(){
    document.getElementsByClassName("btn")[0].classList.remove("changeBtn");
    document.getElementsByClassName("ball")[0].classList.remove("changeBall");
    document.getElementsByTagName("p")[0].classList.remove("changeText");
    document.getElementsByTagName("body")[0].classList.remove("changeBack");
}