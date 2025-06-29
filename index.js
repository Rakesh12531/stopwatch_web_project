let display = document.getElementById("display");
let timer = null;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(TimeRanges);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.value = "00:00:00:00"
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;  

    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/1000 % 60);
    let mseconds = Math.floor(elapsedTime%1000 / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    mseconds = String(mseconds).padStart(2,"0");

    display.value = `${hours} : ${minutes} : ${seconds} : ${mseconds}`;
}