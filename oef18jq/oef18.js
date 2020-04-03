$(document).ready(function(){

    $("button").on({
        click: function(){
        var input = $("input").val();//.value bestaat niet in jquerry
        var title = $("<h1></h1>").text(input)
        //$("h1:first").remove();
        $("body").prepend(title);    
        }
    })
})