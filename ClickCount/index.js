let count = 0;
let num = document.getElementById("num");
function increament(){
    count++;
    num.innerHTML = count;
}

let btn = document.getElementById("button");
btn.addEventListener("click",increament);