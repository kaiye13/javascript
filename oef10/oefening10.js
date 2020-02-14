var getal;

function leesGetal() {

    do {
        getal = +prompt("geef een getal in tussen 1 en 20:"); //een integer van maken 
    } while (isNaN(getal) || getal == "" || getal == null || getal < 1 || getal > 20);
    document.getElementById("waarde").innerHTML = "<h1> De tafels van" + getal + "</h1>";
    return getal;
}

function toonTafels(getal) {
    var total = "";
    for (var table = 1; table <= 20; table++) {
        total += "<p>" + table + " * " + getal + " = " + (table * getal) + "</p>";
    }
    return document.getElementById("resultaat").innerHTML = total;
}
leesGetal();
toonTafels(getal);
