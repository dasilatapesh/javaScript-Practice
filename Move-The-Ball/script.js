let ball = document.querySelector(".ball");
let viewPortH = window.innerHeight;
let viewPortW = window.innerWidth;
function eventHandler(e){
    let width = parseInt(ball.style.left);
    let height = parseInt(ball.style.top);

    if(e.key === 'a' || e.key === 'A' || e.keyCode === 37){
        if(width-5>=0){
            ball.style.left = width-10+"px";
        }
    }else if(e.key === 'w' || e.key === 'W' || e.keyCode === 38){
        if(height-5>=0){
            ball.style.top = height-10+"px";
        }
    }else if(e.key === 'd' || e.key === 'D' || e.keyCode === 39){
        if(width<=viewPortW-5-100){
            ball.style.left = width+10+"px";
        }
    }else if(e.key === 's' || e.key === 'S' || e.keyCode === 40){
        if(height<=viewPortH-5-100){
            ball.style.top = height+10+"px";
        }
    }
}

function loadHandeler(){
    let width = Math.floor(Math.random() * (viewPortW-100));
    let height = Math.floor(Math.random() * (viewPortH-100));
    ball.style.left = width+"px";
    ball.style.top = height+"px";
}

document.addEventListener("load",loadHandeler());
document.addEventListener("keydown", eventHandler);