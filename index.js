const buttoninc = document.getElementById("buttonINC");
const buttonrest = document.getElementById("buttonREST");
const buttondec = document.getElementById("buttonDEC");
const countlabel = document.getElementById("countLabel");
let count = 0;

buttoninc.onclick = function(){
    count++;
    countlabel.textContent = count;
}
buttondec.onclick = function(){
    count--;
    countlabel.textContent = count;
}
buttonrest.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}