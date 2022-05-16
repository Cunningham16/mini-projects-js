const bodyHtml = document.querySelector("body");
const changeBtnBg = document.querySelector("button");
const displayBackground = document.querySelector("h3");

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

function getRandomDirection(){
    const direction = getRandomInt(361)+"deg";
    let turn;
    if(direction === "0deg"){
        turn = 'to top';
    }else if(direction === "180deg"){
        turn = 'to bottom';
    }else if(direction === "270deg"){
        turn = 'to left';
    }else if(direction === "90deg"){
        turn = 'to right';
    }else{
        turn = direction;
    }
    return turn;
}

function getLinearBg(counterColors, isMultiCol){
    if(isMultiCol === 1){
        let direction = getRandomDirection();
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
            let direction = getRandomDirection();
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
    let counterColors = getRandomInt(3)+1;
    let firstColor = getRandomHex();
    let isMultiCol = getRandomInt(4)+1;

    if(counterColors === 1){
        bodyHtml.style.background = firstColor;
        displayBackground.textContent = "Background:  "+firstColor+";";
    }else if(counterColors > 1){
        getLinearBg(counterColors, isMultiCol);
    }
}
setRandomBG();

changeBtnBg.addEventListener("click", setRandomBG);