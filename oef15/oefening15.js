var box = document.getElementById("box");
var resultaat = document.getElementById("resultaat");

box.addEventListener("mouseover", function(){
    resultaat.innerHTML += "<p>De box werd betreden<p>";
    box.style.backgroundColor = "green";
})

box.addEventListener("mouseout", function(){
    resultaat.innerHTML += "<p>De box werd verlaten</p>"; 
    box.style.backgroundColor = "red";
})

box.addEventListener("mousedown", function(){
    box.style.border = "5px solid black";
})

box.addEventListener("mouseup", function(){
    box.style.border = "0px";   
})

