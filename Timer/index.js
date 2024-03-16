const timer = document.getElementById("timer");
let num  = 0;
let intervalId;

function start(){
    intervalId = setInterval(() => {
        timer.innerHTML = num;
        num++;
        if(num>10){
            timer.style.marginLeft = "8%";
        }
    }, 1000);
}

function stop(){
    clearInterval(intervalId);
}

function reset(){
    clearInterval(intervalId);
    num=0;
    timer.innerHTML = num;
    timer.style.marginLeft = "30%";
}