"use strict";
document.getElementById("frage").onclick = function() {
    document.getElementById("info").innerHTML = "";
    var fehler = false;
    var f = document.forms[0];
    // Kontrolle Userid - direkter Zugriff über den Namen
    if (f.user.value.length < 8) {
        document.getElementById("info").innerHTML += "Die Userid hat zu wenig Zeichen.<br/>";
        f.user.value = "";
        f.user.focus();
        fehler = true;
    }
    // Kontrolle Passwort - Zugriff über getElementsByName
    if (document.getElementsByName("pw")[0].value.length < 10) {
        document.getElementById("info").innerHTML += "Das Passwort besteht aus mindestens 10 Zeichen";
        f.pw.value = "";
        f.pw.focus();
        fehler = true;
    }
    if (fehler) {
        return;
    }
    f.action = "info.php";
    f.submit();
};
document.getElementById("zurueck").onclick = function() {
    if (confirm("Das Formular wird zurückgesetzt.\nSind Sie sicher?")) {
        document.forms[0].reset();
        document.getElementById("info").innerHTML = "";
        return false;
    }
    return false;
};