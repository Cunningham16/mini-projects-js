let timerDisplay = document.querySelector(".timer");
let greetingsDisplay = document.querySelector(".greetings");
let bodyBackground = document.querySelector("body");
let optionalText = document.querySelector(".addictional__text")

function formBG(hour){
    if(hour >= 5 && hour < 12){
        greetingsDisplay.textContent = "Good Morning, ";
        bodyBackground.style.backgroundImage = "url(img/morning.jfif)";
    }else if(hour >= 12 && hour < 18){
        greetingsDisplay.textContent = "Good Afternoon, ";
        bodyBackground.style.backgroundImage = "url(img/afternoon.jfif)";
    }else if(hour >= 18 && hour < 23){
        greetingsDisplay.textContent = "Good Evening, ";
        bodyBackground.style.backgroundImage = "url(img/evening.jfif)";
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
            timerDisplay.textContent = time + " PM";
        }else{
            timerDisplay.textContent = time + " AM";
        }
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
        timerDisplay.style.transform = "translate(0, 0)";
        timerDisplay.style.transition = "1s";
        timerDisplay.style.opacity = "1";
    }, 500);
    setTimeout(function(){
        greetingsDisplay.style.transform = "translate(0, 0)";
        greetingsDisplay.style.transition = "1s";
        greetingsDisplay.style.opacity = "1";
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
            timerDisplay.textContent = time + " PM";
        }else{
            timerDisplay.textContent = time + " AM";
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
        formTime(timeWatch.hour, halfDayOver);
    }
},1000);