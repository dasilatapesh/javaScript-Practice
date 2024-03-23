const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const outputText = document.querySelector(".output");
let rgb1 = "#E76C6C";
let rgb2 = "#59D0E7";

function generateHexCode(n){
    let hexVal = "0123456789ABCDEF";
    let myVal = "#";
    for(let i = 1;i<=n;i++){
        myVal+=hexVal[Math.floor(Math.random() * hexVal.length)];
    }
    return myVal;
}

function handleButton1(){
    rgb1 = generateHexCode(6);
    console.log(`Left: ${rgb1}`);
    document.body.style.background= `linear-gradient(to right,${rgb1},${rgb2})`
    btn1.textContent = `${rgb1}`;
    outputText.innerHTML = `background: linear-gradient(to right, ${rgb1}, ${rgb2});`
}

function handleButton2(){
    rgb2 = generateHexCode(6);
    console.log(`Right: ${rgb2}`);
    document.body.style.background= `linear-gradient(to right,${rgb1},${rgb2})`
    btn2.textContent = `${rgb2}`;
    outputText.innerText = `background: linear-gradient(to right, ${rgb1}, ${rgb2});`
}

outputText.addEventListener('click', () =>{
    navigator.clipboard.writeText(outputText.innerText);
    console.log(outputText.innerText)
    alert("Successfully Copied");
});

btn1.addEventListener('click', handleButton1);
btn2.addEventListener('click', handleButton2);