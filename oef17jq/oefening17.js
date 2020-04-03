var paragraph = document.getElementsByTagName("p");

for(var p in paragraph)
{
    paragraph[p].addEventListener("click", function(){
        this.style.color = "red";
        this.innerHTML = "CLICK!";
    })
}