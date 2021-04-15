"use strict";
var a1 = new Array(2, 3, 5, 7, 11, 13, 17, 19);
var a2 = {
    name: "Meier",
    vname: "Hans",
    alter: 42
};
for (var i = 0; i < a1.length; i++) {
    console.log(a1[i]);
}
for (var i in a2) {
    console.log(i + ", " + a2[i]);
}