"use strict";

function multi(a, b) {
    return a * b;
}

function add(a, b) {
    console.log(a + b);
}

console.log(multi(4, 5));
add(4, 9);
add(7, 13);
document.getElementById("btn").onclick = function() {
    add(6, 7);
};