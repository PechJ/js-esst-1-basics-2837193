"use strict";

function test(a, b) {
    console.log(a);
    console.log(b);
    console.log(arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    for (var i in arguments) {
        console.log(arguments[i]);
    }

}
test(3);
test(1, 2, 3);