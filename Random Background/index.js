const bodyHtml = document.querySelector("body");
const changeBtnBg = document.querySelector("button");
let displayBackground = document.querySelector("h3");

const arr_en = ['a', 'b', 'c', 'd', 'e', 'f','0','1','2','3','4','5','6','7','8','9'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomHex(){
    let hex = '';
    for(let i = 1; i <= 6; i++){
        hex = hex + arr_en[getRandomInt(arr_en.length)];
    }
    hex = "#" + hex;
    return hex;
}

function getLinearBg(counterColors, direction, isMultiCol){
    if(isMultiCol === 1){
        let bgConfig = "linear-gradient("+direction+", ";
        for(let i = 1; i < counterColors; i++){
            bgConfig = bgConfig + String(getRandomHex())+", ";
            if(i === counterColors - 1){
                bgConfig = bgConfig + String(getRandomHex()) + ")";
            }
            bodyHtml.style.background = bgConfig;
            displayBackground.textContent = "Background:  "+bgConfig+";";
        }
    }else if(isMultiCol > 1){
        let multiBg = '';
        for(let i = 1; i < isMultiCol; i++){
            if(i < isMultiCol-1){
                let bgConfig = "linear-gradient("+direction+", ";
                for(let i = 1; i < counterColors; i++){
                    bgConfig = bgConfig + String(getRandomHex())+", ";
                    if(i === counterColors - 1){
                    bgConfig = bgConfig + String(getRandomHex()) + "),";
                    }
                }
                multiBg = multiBg+bgConfig;
            }else if(i === isMultiCol-1){
                let bgConfig = "linear-gradient("+direction+", ";
                for(let i = 1; i < counterColors; i++){
                    bgConfig = bgConfig + String(getRandomHex())+", ";
                    if(i === counterColors - 1){
                    bgConfig = bgConfig + String(getRandomHex()) + ")";
                    }
                }
                multiBg = multiBg+bgConfig;
            }
            bodyHtml.style.background = multiBg;
            displayBackground.textContent = "Background:  "+multiBg+";";
        }
    }
}

function setRandomBG(){
    let directionGrad = String(getRandomInt(361))+"deg";
    let counterColors = getRandomInt(3)+1;
    let firstColor = getRandomHex();
    let secondColor = getRandomHex();
    let direction = getRandomInt(361)+"deg";
    let isMultiCol = getRandomInt(4)+1;

    if(directionGrad === "0deg"){
        direction = 'to top';
    }else if(directionGrad === "180deg"){
        direction = 'to bottom';
    }else if(directionGrad === "270deg"){
        direction = 'to left';
    }else if(directionGrad === "90deg"){
        direction = 'to right';
    }else{
        direction = directionGrad;
    }

    if(counterColors === 1){
        bodyHtml.style.background = firstColor;
        displayBackground.textContent = "Background:  "+firstColor+";";
    }else if(counterColors > 1){
        getLinearBg(counterColors, direction, isMultiCol);
    }
}
setRandomBG();

changeBtnBg.addEventListener("click", setRandomBG);