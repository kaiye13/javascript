document.getElementById("btnBericht").addEventListener("click", function(){
    var naam = document.getElementById("naam").value;
    var voornaam = document.getElementById("voornaam").value;

    var geboorteDatum = new Date(document.getElementById("geboortedatum").value);
    var currentDate = new Date();
    var leeftijd = currentDate.getFullYear() - geboorteDatum.getFullYear();

    if(naam == "")
    {
        alert("geef een naam in")
    }
    if(naam == "")
    {
        alert("geef een voornaam in")
    }
    if(isNaN(leeftijd))
    {
        alert("geef een juiste geboortedatum in")
    }
    
    alert("Hallo " + voornaam + " " + naam + ", jij wordt " + leeftijd + " jaar oud.");
})