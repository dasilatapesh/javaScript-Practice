let countInterval;


function resetNumbers(currentNo,nextNo){
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}

function increaseCount(currentNo, nextNo){
    nextNo.classList.add("animate");

    setTimeout(function () {
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
    }, 800);
}

function startCount(){
    console.log("started")
    let input = document.getElementById("input-num");
    let inputNumber  = parseInt(input.value);
    if(isNaN(inputNumber)){
        //important for condition if counter is runnig and you entered invalid input
        clearInterval(countInterval);
        input.value="";
        alert("Please Enter the valid number.");
        return;
    }

    if(inputNumber<1 || inputNumber>9){
        alert("Range out of bounds");
        input.value="";
        clearInterval(countInterval);
        return;
    }

    var currentNo = document.querySelector(".curr");
    var nextNo = document.querySelector(".next");
    var count = 0;

    //if user clicks start button while counter is running
    resetNumbers(currentNo,nextNo);

    //clear previous interval running
    clearInterval(countInterval);

    //run counter
    countInterval = setInterval(function () {
        if (count === inputNumber) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(currentNo, nextNo);
        count++;
    }, 1000);
}