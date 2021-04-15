setTimeout(function() {
    document.getElementsByTagName("body")[0].style.background = "red";
    document.getElementsByTagName("body")[0].style.color = "white";
}, 3000);

function zeige(i) {
    var d = document.getElementsByTagName("div");

    document.getElementsByTagName("div")[i].style.display = "block";

    if (i < d.length) {
        setTimeout(function() {
            zeige(++i);
        }, 3000);
    }
}
zeige(0);