$("document").ready(function () {
    //key 87eae29e41846cf934db1ef582a572d6 
    $("#toonWeer").click(function () {
        var WheatherAppUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
        var plaatsNaam = $("#plaatsNaam").val();

        if (plaatsNaam == "") {
            alert("Vul een plaatsnaam in.");
        } else {

            WheatherAppUrl += plaatsNaam;
            WheatherAppUrl += "&type=like&units=metric&lang=nl&appid=87eae29e41846cf934db1ef582a572d6";
            /* $ajax({
                 url: WheatherAppUrl,
                 succes: fucntion(data){
                    console.log(data);
                    var plaats = data.name;
                    var land = data.sys.country;
                    var temperatuur = data.main.temp;
                    var omschrijving = data.weather[0].description;
                    var icoon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                    var wind = data.wind.speed;
                    console.log(icoon);
                    $("#resultaat").html("<strong>" + plaats + ", " + land + "</strong>   " + temperatuur + " graden  " + omschrijving + "  <img src=" + icoon + " alt=" + omschrijving + "/>  " + wind);
                 },
                 error: function (jqXHR, textStatus, errorThrown) {
                     $("#resultaat").html("Zoekopdracht voor " + plaatsNaam + " mislukt! " + textStatus + ": " + errorThrown);
                 };
             })*/
            $.get(WheatherAppUrl)
                .done(function (data) {
                    console.log(data);
                    var plaats = data.name;
                    var land = data.sys.country;
                    var temperatuur = data.main.temp;
                    var omschrijving = data.weather[0].description;
                    var icoon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                    var wind = data.wind.speed;
                    console.log(icoon);
                    $("#resultaat").html("<strong>" + plaats + ", " + land + "</strong>   " + temperatuur + " graden  " + omschrijving + "  <img src=" + icoon + " alt=" + omschrijving + "/>  " + wind);
                })

                .fail(function (jqXHR, textStatus, errorThrown) {
                    $("#resultaat").html("Zoekopdracht voor " + plaatsNaam + " mislukt! " + textStatus + ": " + errorThrown);
                });
        }
    });
});