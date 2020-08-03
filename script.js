 // body alert
 function showAlert() {
    alert ("First click on generate pin");
}

// random number code
document.getElementById("generate-button").addEventListener("click", function(){
    let randomPin = Math.floor((Math.random() *(9999-1000)) + 1000);
    document.getElementById("random-input").value = randomPin;
    randomNumber = parseInt(randomPin);
});

// key pad code
function calculate(data) {
    let pinValue = document.getElementById("enter-input").value;
    document.getElementById("enter-input").value = pinValue.concat(data);
    keyPadNumber = parseInt(pinValue.concat(data));
    if (data == 'C') {
        document.getElementById("enter-input").value = ""; 
    }
    if (data == '<') {
        document.getElementById("enter-input").value = pinValue.slice(0, -1);
    }
}

// submit button code
let count = 3;    
let submitButton = document.getElementById("submit-button").addEventListener("click", function(){
    if (randomNumber == keyPadNumber) {
        document.getElementById("match-notify").style.display = "block";
        document.getElementById("not-match-notify").style.display = "none"
    } 
    else {
        document.getElementById("not-match-notify").style.display = "block"
        document.getElementById("match-notify").style.display = "none";
        count--;
        if (count < 0) {
            count = 0;
        }
        document.getElementById("count-try").innerHTML = count;
    }
});