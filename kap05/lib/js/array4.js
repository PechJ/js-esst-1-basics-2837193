"use strict";
var a1 = new Array(1, 2, 3, 5, 7);
console.log(a1.length);
a1[10] = 11;
a1["vname"] = "Otto";
a1[true] = false;

console.log(a1.length);