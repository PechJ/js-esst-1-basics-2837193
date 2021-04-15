"use strict";
var i = 0;
while (i < 10) {
    i++;
    if (i % 2 == 0) continue;
    document.write("<tr><td>" + i + "</td><td> ", i * i, "</td></tr>");
}