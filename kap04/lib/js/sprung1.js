"use strict";
var i = 0;
while (true) {
    i++;
    document.write("<tr><td>" + i + "</td><td> ", i * i, "</td></tr>");
    if (i > 9) {
        break;
    }
}