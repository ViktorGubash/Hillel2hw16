let time = document.querySelector('.time')
setInterval(updateTime, 500);
function updateTime() {
    const date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
}

// let a = 0;
// setInterval(counting, 1000);
// function counting() {
//     a = a + 1;
// }
// function timer() {
//     b = b + 1;
// }
let nIntervId;
let b = 1;

function starting() {
    if (!nIntervId) {
        nIntervId = setInterval(flashText, 60000);
    }
}

function flashText() {
    b = b + 1;
}

function stopping() {
    clearInterval(nIntervId);
    nIntervId = null;
}





setInterval(show, 1000)
function show() {
    document.getElementById("count").innerHTML = "You have been on this page for:" + " " + b + " minutes.";
}

setInterval(flashColour, 500);
function flashColour() {
    const oElem = document.getElementById("box");
    oElem.className = oElem.className === "go" ? "stop" : "go";
}

document.getElementById("X").addEventListener("click", stopping);
document.getElementById("Y").addEventListener("click", starting);