
do {
    var getal = prompt("geef een getal in tussen 1 en 20:");
} while (isNaN(getal) || getal =="" || getal==null || getal<1 || getal>20);

document.getElementById("waarde").innerHTML = "<h1> De tafels van" + getal + "</h1>";
var total = "";
for (var table = 1; table <= 20; table++) {
    total += "<p>" + table + " * " + getal + " = " + (table * getal) + "</p>";
}
document.getElementById("resultaat").innerHTML = total;