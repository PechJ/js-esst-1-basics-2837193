"use strict";
var erg = prompt("Geben Sie eine Zahl zwischen 1 und 10 ein", "");
console.log("Sie haben " + erg + " eingeben!");
switch (erg) {
    case "1":
        console.log("Das führt zur Auswahl 1.");
        break;
    case "2":
        console.log("Das führt zur Auswahl 2.");
        break;
    case "3":
        console.log("Das führt zur Auswahl 3.");
        break;
    case "4":
        console.log("Das führt zur Auswahl 4.");
        break;
    default:
        console.log("Der Vorgabefall wird genommen.");
}
console.log("\n********\nNach der switch-case-Anweisung.");