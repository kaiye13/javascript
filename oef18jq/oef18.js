$(document).ready(function(){

    $("button").on({
        click: function(){
        var input = $("input").val();
        var title = $("<h1></h1>").text(input)
        $("body").prepend(title);    
        }
    })
})