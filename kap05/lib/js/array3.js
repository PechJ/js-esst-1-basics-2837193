"use strict";
var a1 = new Array();
var a2 = [];
var a3 = {};
a1[0] = 1;
a1[0] = 2;
a1[10] = 3;
a1["vname"] = "Otto";
console.log(a1["vname"]);
var a4 = new Array(1, 2, 3);
console.log(a4[2]);
var a5 = [2, 3, 5, 7];

var a6 = {
    name: "Meier",
    vname: "Hans"
};
console.log(a6["vname"]);
console.log(a6.vname);