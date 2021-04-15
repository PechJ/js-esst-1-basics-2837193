"use strict";
document.getElementById("bild1").onmouseover = function() {
    document.getElementById("info").innerHTML = document.getElementById("bild1").alt;
}
document.getElementById("bild1").onmouseout = function() {
    document.getElementById("info").innerHTML = "";
}
document.getElementById("btn").onclick = function() {
    document.getElementById("info").innerHTML = document.getElementsByName("eingabe")[0].value;
}