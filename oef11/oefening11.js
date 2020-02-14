
function leesGetal() {

    do {
        getal = +prompt("geef een getal in tussen 1 en 20:"); //een integer van maken 
    } while (isNaN(getal) || getal == "" || getal == null || getal < 1 || getal > 20);
    document.getElementById("waarde").innerHTML = "<h1> De tafels van " + getal + "</h1>";
    return getal;
}

function berekenTafels() {
    var uitkomst=[]; 
    for (var table=1; table<=20; table++)
    {
        uitkomst.push(table*getal);
    
    }   return uitkomst;
}

function toonTafels(getal,uitkomst) {
    var display="";
    for (var table=1; table<=20; table++)
        {
        display += table + "*" + getal + "=" + uitkomst.shift()+"<br />";
        }
    document.getElementById("resultaat").innerHTML = display;
}

var getal = leesGetal();
var getalTafels = berekenTafels(getal);
toonTafels(getal, getalTafels);

