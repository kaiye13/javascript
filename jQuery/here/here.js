$("document").ready(function () {
    // Initialize the platform object:
    var platform = new H.service.Platform({
        'app_id': 'xVp8lryoDiW27E28B3Nj',
        'app_code': 'CkSP_tggQhP_SGejHg3BVg'
    });

    // Obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.normal.traffic,
        {
            zoom: 14,
            center: { lng: 5.39559, lat: 50.92906 }

        });
    // Enable the event system on the map instance:
    var mapEvents = new H.mapevents.MapEvents(map);

    // Add event listener:
    map.addEventListener('tap', function (evt) {
        // Log 'tap' and 'mouse' events:
        console.log(evt.type, evt.currentPointer.type);
    });
    // Instantiate the default behavior, providing the mapEvents object: 
    var behavior = new H.mapevents.Behavior(mapEvents);

    // Create a marker icon from an image URL:
    var icon = new H.map.Icon('Logo_klein.png', { anchor: { x: '20', y: '20' } });




    // Create a marker using the previously instantiated icon:
    //var marker = new H.map.Marker({ lat: 50.92906, lng: 5.39559 }, { icon: icon });

    // Create a group that can hold map objects:
    group = new H.map.Group();

    // Add the group to the map object (created earlier):
    map.addObject(group);


    // Get an instance of the geocoding service:
    var geocoder = platform.getGeocodingService();


    // Create a marker:
    for (var i = 0; i < ucllCampi.length; i++) {
        var geocodingParams = {
            searchText: ucllCampi[i].adres
        };
        // Call the geocode method with the geocoding parameters,
        // the callback and an error callback function (called if a
        // communication error occurs):

        var markerdata = ucllCampi[i];
        geocoder.geocode(geocodingParams, 
            function (result) {
            var position = result.Response.View[0].Result[0].Location.DisplayPosition;
            console.log(position);

            var marker = new H.map.Marker({lng:position.Longitude, lat:position.Latitude},{icon: icon, data: markerdata});

            group.addObject(marker);

            marker.addEventListener('tap', function(evt){
                console.log(evt.target.getData());

                var bubble = new H.ui.InfoBubble(evt.target.getPosition(), {
                    content: evt.target.getData().naam
                });
                //add info buble to the ui:
                ui.addBubble(bubble);
            });

            var bounds = group.getBounds();
            if (bounds) {
                map.setViewBounds(bounds);
            } else {
                map.setZoom(14);
                map.setCenter({ lng: 5.39559, lat: 50.92906 });
            }

        }, function (e) {
            alert(e);
        });

        // Add the marker to the group (which causes 
        // it to be displayed on the map)
        //group.addObject(marker);

        // Add event listener:
        //marker.addEventListener('tap', function (evt) {
            // Log 'tap' and 'mouse' events:
            // Create an info bubble object at a specific geographic location:
           // var bubble = new H.ui.InfoBubble(evt.target.getPosition(), {
            //    content: evt.target.getData().title
           // });

            // Add info bubble to the UI:
            //ui.addBubble(bubble);
       // });
    }




    // Add the marker to the map:
    // map.addObject(marker);



    // Create the default UI:
    var ui = H.ui.UI.createDefault(map, maptypes, 'nl-NL');



});
