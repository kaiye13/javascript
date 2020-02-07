var zin = prompt("welke zin had je graag opgenomen?");
var positie = zin.indexOf(" ")+1;
var totaal =  "<p>In de zin:" + zin +  "</p>" + "<p> staat de spatie op positie " + positie + "</p>"
document.getElementById("resultaat").innerHTML = totaal;

