"use strict";
var z1 = 1;
var z2 = 1;
var z3 = 2;
// Und
console.log((z1 < z3) && (z2 < z3));

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Und bit
console.log(true & true);
console.log(true & false);
console.log(false & true);
console.log(false & false);

// Oder
console.log((z1 < z1) || (z2 < z3));

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Oder bit
console.log(true | true);
console.log(true | false);
console.log(false | true);
console.log(false | false);

// Nicht
console.log(!true);
console.log(!false);

// Exklusiv Oder (XOR - bit)
console.log(true ^ true);
console.log(true ^ false);
console.log(false ^ true);
console.log(false ^ false);