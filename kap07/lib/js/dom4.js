"use strict";
document.getElementById("bild1").onmouseover = function() {
    this.style.opacity = 0.1;
}
document.getElementById("bild1").onmouseout = function() {
    this.style.opacity = 1;
}
document.getElementById("bild1").onclick = function() {
    ani(100)
}

function ani(i) {
    var b = document.getElementById("bild1");
    b.style.width = i + "px";

    if (i < 400) {
        setTimeout(function() {
            ani(++i);
        }, 1);
    }
}