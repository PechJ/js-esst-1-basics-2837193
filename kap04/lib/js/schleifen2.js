"use strict";
var i = 42;
do {
    i++;
    document.write("<tr><td>" + i + "</td><td> ", i * i, "</td></tr>");
} while (i < 10);