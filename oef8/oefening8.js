do{

    var getal1 = prompt("geet een getal in");
    var getal2 = prompt("geeft een tweede getal in");
}
while(isNaN(getal1) || isNaN(getal2) || getal1 =="" || getal2=="" ||getal1==null |getal2==null)

 if(getal1 > getal2){
    var totaal = "<p>het eerste getal (" + getal1 +") is groter het tweede getal (" + getal2 + ")</p>"   ;

}else if (getal2 > getal1)
{
    var totaal = "<p>het eerste getal (" + getal1 +") is kleiner het tweede getal (" + getal2 + ")</p>";
}else {
    var totaal = "<p>het eerste getal (" + getal1 +") is gelijk aan het tweede getal (" + getal2 + ")</p>";};
   
document.getElementById("resultaat").innerHTML = totaal;