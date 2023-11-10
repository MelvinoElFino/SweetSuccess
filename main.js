var navLinks = document.getElementById("navLinks")
let rangeValueV = document.getElementById("rangeValueV");
let rangeV = document.getElementById("rangeV");
let rangeValueS = document.getElementById("rangeValueS");
let rangeS = document.getElementById("rangeS");
let percentage = 0.58;





function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

function showValue(id){
    if (id === 1){
        rangeValueV.innerText = rangeV.value + " kr";
        newS = Math.floor((rangeV.value*percentage));
        rangeS.value = newS;
        rangeValueS.innerText = newS + " kr";
    }
    else if (id === 2){
        rangeValueS.innerText = rangeS.value + " kr";
        newV = Math.floor((rangeS.value/percentage));
        rangeV.value = newV;
        rangeValueV.innerText = newV + " kr";
    }
}

function showMenu(){
    navLinks.style.right = "0px";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}
