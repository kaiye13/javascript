function getShortest(fast){
    searchLocation = $("#startPoint").val();
    if (searchLocation.length>0){
        // verwijder error messages
        $("#configParams span").remove();

        // convert searchLocation to lat-lng coordinates 
    console.log(searchLocation);
    $.when(getLocationData(searchLocation, -1)).then(
        function (startPosition, index){
            if (startPosition == -1){
                var errorMessage = $("<span></span>").text("Adres niet gevonden.");
                $("#dichtstBij").before(errorMessage);
                errorMessage.css({"color": "red", "background-color":"white", "position": "absolute", "bottom": "30px", "padding":"5px", "border-radius":"10px"})
          
            } else {
                console.log("startPosition:", startPosition);
                $.when(getDistances(startPosition)).then(
                    function (shortest, fastest){
                        if (shortest.index > -1  && fastest.index > -1) {
                            var home = new H.map.Marker(startPosition);

                            if (fast) {
                                var marker = new H.map.Marker(ucllCampi[fastest.index].position, 
                                    { icon: icon, data: ucllCampi[fastest.index] });
                            } else {
                                var marker = new H.map.Marker(ucllCampi[shortest.index].position, 
                                    { icon: icon, data: ucllCampi[shortest.index] });
                            }

                            marker.addEventListener('tap', function(evt){
                                // Add info bubble to the UI:
                                console.log(evt.target.getData());
                                var naam = evt.target.getData().naam;
                                var adres = evt.target.getData().adres;
                                var distance = evt.target.getData().distance;
                                var travelTime = evt.target.getData().travelTime;
                                var position = evt.target.getGeometry();
                
                                // Create an info bubble object at a specific geographic location:
                                var bubble = new H.ui.InfoBubble(position, {
                                    content: '<b>'+naam+'</b><br/>'+adres+'<br/>Afstand: '+distance/1000+'km<br/>Reistijd: '+travelTime/60+'min'});
                                    //bubble.addClass('infoWindow');
                
                                ui.addBubble(bubble);
                            });

                            // Add the marker to the map:
                            groupOne.removeAll();
                            groupOne.addObject(home);
                            groupOne.addObject(marker);
                        
                            map.addObject(groupOne);

                            var bounds = groupOne.getBoundingBox();
                            console.log(bounds);
                            if (bounds) {
                                map.getViewModel().setLookAtData({
                                    bounds: bounds
                                  });
                            } else {
                                map.getViewModel().setLookAtData({
                                    position:{ lng: 5.39559, lat: 50.92906 }, 
                                    zoom: 14});
                            }

                                  // get geo bounding box for the group and set it to the map


                    } else {
                        var errorMessage = $("<span></span>").text("Kortst bij niet gevonden.");
                        $("#dichtstBij").before(errorMessage);
                        errorMessage.css({"color": "red", "background-color":"white", "position": "absolute", "bottom": "30px", "padding":"5px", "border-radius":"10px"})
                    }   


                }, function(error){
                    // error bericht tonen
                    console.log("getDistances error")
                });
            }
        }, function(error){
            // error bericht tonen
            console.log("getLocationData error");                 
        });

    } else {
        // Toon error message
        var errorMessage = $("<span></span>").text("Vul adres in.");
        $("#dichtstBij").before(errorMessage);
        errorMessage.css({"color": "red", "background-color":"white", "position": "absolute", "bottom": "30px", "padding":"5px", "border-radius":"10px"})

    }
}