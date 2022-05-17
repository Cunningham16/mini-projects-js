let timerDisplay = document.querySelector(".timer");
let timerContainer = document.querySelector(".timer__container");
let greetingsDisplay = document.querySelector(".greetings");
let greetingsAnimation = document.querySelector(".greetings__name");
let bodyBackground = document.querySelector("body");
let optionalText = document.querySelector(".addictional__text");
let timeAM_PM = document.querySelector(".AM_or_PM");

function formBG(hour){
    if(hour >= 5 && hour < 12){
        greetingsDisplay.textContent = "Good Morning, ";
        bodyBackground.style.backgroundImage = "url(img/morning.jpg)";
    }else if(hour >= 12 && hour < 18){
        greetingsDisplay.textContent = "Good Afternoon, ";
        bodyBackground.style.backgroundImage = "url(img/afternoon.jpg)";
    }else if(hour >= 18 && hour < 23){
        greetingsDisplay.textContent = "Good Evening, ";
        bodyBackground.style.backgroundImage = "url(img/evening.jpg)";
    }else if(hour >= 23 && hour < 5){
        greetingsDisplay.textContent = "You should go sleep, ";
        bodyBackground.style.backgroundImage = "url(img/night.jfif)";
    }
};

document.addEventListener("DOMContentLoaded", function(){
    time = new Date();

    function formTime(hour,isHalf){
        let time = hour+":"+timeWatch.toTen(timeWatch.minutes)+":"+timeWatch.toTen(timeWatch.seconds);
        if(isHalf === true){
            timeAM_PM.textContent = "PM";
        }else{
            timeAM_PM.textContent = "AM";
        }
        timerDisplay.textContent = time;
    };

    const timeWatch = {
        hour: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds(),

        toTen(elem){
            if(elem/10 < 1){
                elem = "0" + elem;
                return elem; 
            }else{
                return elem;
            }
        }
    };

    let halfDayOver;
    if(timeWatch.hour > 12){
        let midHour;
        midHour = timeWatch.hour - 12;
        halfDayOver = true;
        formTime(midHour, halfDayOver);
        formBG(timeWatch.hour, halfDayOver);
    }else{
        halfDayOver = false;
        formBG(timeWatch.hour, halfDayOver);
        formTime(timeWatch.hour, halfDayOver);
    }
    
    setTimeout(function(){
        timerContainer.style.transform = "translate(0, 0)";
        timerContainer.style.transition = "1s";
        timerContainer.style.opacity = "1";
    }, 500);
    setTimeout(function(){
        greetingsAnimation.style.transform = "translate(0, 0)";
        greetingsAnimation.style.transition = "1s";
        greetingsAnimation.style.opacity = "1";
    }, 1800);
    setTimeout(function(){
        optionalText.style.transform = "translate(0, 0)";
        optionalText.style.transition = "1s";
        optionalText.style.opacity = "1";
    }, 2300);
});

setInterval(function(){
    time = new Date();

    const timeWatch = {
        hour: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds(),

        toTen(elem){
            if(elem/10 < 1){
                elem = "0" + elem;
                return elem; 
            }else{
                return elem;
            }
        }
    };

    function formTime(hour,isHalf){
        let time = hour+":"+timeWatch.toTen(timeWatch.minutes)+":"+timeWatch.toTen(timeWatch.seconds);
        if(isHalf === true){
            timeAM_PM.textContent = "PM";
        }else{
            timeAM_PM.textContent = "AM";
        }
        timerDisplay.textContent = time;
    };
    
    let halfDayOver;
    if(timeWatch.hour > 12){
        let midHour;
        midHour = timeWatch.hour - 12;
        halfDayOver = true;
        formTime(midHour, halfDayOver);
        formBG(timeWatch.hour, halfDayOver);
    }else{
        halfDayOver = false;
        formTime(timeWatch.hour, halfDayOver);
    }
},1000);

const inputNameNode = document.querySelector(".input__name");
const inputTaskNode = document.querySelector(".input__task");

inputNameNode.value = localStorage.getItem("user_name");
if(inputNameNode.value === ""){
    inputNameNode.style.width = "200px";
}else{
    inputNameNode.style.width = `${inputNameNode.value.length * 17.5}px`;
}

inputTaskNode.value = localStorage.getItem("user_task");
if(inputTaskNode.value === ""){
    inputTaskNode.style.width = "400px";
}else{
    inputTaskNode.style.width = `${inputTaskNode.value.length * 21.5}px`;
}

inputNameNode.addEventListener("input", function(){
    if(inputNameNode.value === ""){
        inputNameNode.style.width = "200px";
        localStorage.setItem("user_name", "");
    }else if(inputNameNode.value !== ""){
        inputNameNode.style.width = `${inputNameNode.value.length * 17.5}px`;
        localStorage.setItem("user_name", inputNameNode.value);
    }
});

inputTaskNode.addEventListener("input", function(){
    if(inputTaskNode.value === ""){
        inputTaskNode.style.width = "400px";
        localStorage.setItem("user_task", "");
    }else if(inputTaskNode.value !== ""){
        inputTaskNode.style.width = `${inputTaskNode.value.length * 21.5}px`;
        localStorage.setItem("user_task", inputTaskNode.value);
    }
});