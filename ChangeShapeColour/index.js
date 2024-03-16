const button = document.getElementsByTagName("button");
const cont =  document.getElementsByClassName("main");
button[0].addEventListener("click",()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    cont[0].style.backgroundColor = `rgb(${red},${green},${blue})`
});

button[1].addEventListener("click",changeShape);

function changeShape(){
    const num = Math.floor(Math.random()*10);
    if(num<=2){
        document.querySelector(".shape").style.borderRadius = "50%"
        document.querySelector(".shape").style.height = "120px";
        document.querySelector(".shape").style.width = "120px";
    }else if(num<=4){
        document.querySelector(".shape").style.borderRadius = "0";
        document.querySelector(".shape").style.height = "120px";
        document.querySelector(".shape").style.width = "120px";
    }else if(num<=6){
        document.querySelector(".shape").style.borderRadius = "0";
        document.querySelector(".shape").style.height = "130px";
        document.querySelector(".shape").style.width = "100px";
    }else if(num<=8){
        document.querySelector(".shape").style.borderRadius = "0";
        document.querySelector(".shape").style.height = "90px";
        document.querySelector(".shape").style.width = "130px";
    }else{
        document.querySelector(".shape").style.borderRadius = "50%";
        document.querySelector(".shape").style.height = "90px";
        document.querySelector(".shape").style.width = "130px";
    }
}