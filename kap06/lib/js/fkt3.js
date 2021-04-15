"use strict";
document.getElementById("btn1").onclick = function() {
    var wert = "19%";
    console.log(parseInt(wert));
};
document.getElementById("btn2").onclick = function() {
    var wert = "4.65 EUR";
    console.log(parseFloat(wert));
};
document.getElementById("btn3").onclick = function() {
    var wert = "2 + 3 * 4";
    console.log(eval(wert));
};
document.getElementById("btn4").onclick = function() {
    var wert = "Müller" * "Meier";
    console.log(isNaN(wert));
    //console.log(NaN == NaN);
};
document.getElementById("btn5").onclick = function() {
    var wert = 5 / 0;
    console.log(wert == Infinity);
    console.log(isFinite(wert));

};