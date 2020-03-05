
function leesGetal() {

    do {
        getal = +prompt("geef een getal in tussen 1 en 20:"); //een integer van maken 
    } while (isNaN(getal) || getal == "" || getal == null || getal < 1 || getal > 20);
    document.getElementById("waarde").innerHTML = "<h1> De tafels van" + getal + "</h1>";
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
        display += table + "*" + getal + "=" + uitkomst[table -1] +"<br />";
        //display += table + "*" + getal + "=" + uitkomst.shift()+"<br />";  maakt de array leeg
        }
    document.getElementById("resultaat").innerHTML = display;
}
function toonSom1(uitkomst)
{
    var length = uitkomst.length;
    var uitkomstSom1 = 0;
    for (var i=0 ; i<length ; i++) 
    {
        uitkomstSom1 +=uitkomst[i];
    }
    document.getElementById("Som1").innerHTML = "som1: " + uitkomstSom1;
}

function toonSom2 (uitkomst)
{
    var uitkomstSom2 = uitkomst.reduce(function(a,b){return a+b;} , 0);
    document.getElementById("Som2").innerHTML = "som2:" + uitkomstSom2;
}

var getal = leesGetal();
document.getElementById("waarde").innerHTML = "<h1> Tafels van " + getal + "</h1>";
var getalTafels = berekenTafels();
console.log(getalTafels);
toonTafels(getal, getalTafels);
console.log(getalTafels);
toonSom1(getalTafels);
toonSom2(getalTafels);