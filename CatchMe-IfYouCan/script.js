let box = document.getElementById("box");
let viewPortH = window.innerHeight;
let viewPortW = window.innerWidth;


function loadHandeler(){
    let width = Math.floor(Math.random() * (viewPortW-80));
    let height = Math.floor(Math.random() * (viewPortH-80));
    box.style.left = width+"px";
    box.style.top = height+"px";
}

function handleEvent(){
    let width = Math.floor(Math.random() * (viewPortW-80));
    let height = Math.floor(Math.random() * (viewPortH-80));
    box.style.left = width+"px";
    box.style.top = height+"px";
}


box.addEventListener("mouseover",handleEvent);

document.addEventListener("load",loadHandeler());