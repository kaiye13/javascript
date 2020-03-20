$(document).ready(function () {
    $("#box").on({
        mouseover: function () {
            $("#box").css("background-color", "green");
            $("#resultaat").html(function(a, origin){return origin + "de box werd betreden.<br />"});
        },
        mouseout: function () {
            $("#box").css("background-color", "red");
            $("#resultaat").html(function(a, origin){return origin + "de box werd verlaten.<br />"});
        },
        mousedown: function () {
            $("#box").css("border", "solid purple 5px");
        },
        mouseup: function () {
            $("#box").css("border", "solid purple 0px");
        }

    })
})

//SHIFT ALT F
