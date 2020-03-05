document.getElementsByTagName("button")[0].addEventListener("click", function(){
    var title = document.createElement("h1");
    if (document.getElementsByTagName("input")[0].value == "")
    {
        alert("vul een titel in")
    }
    else
    {
        title.innerHTML = document.getElementsByTagName("label")[0].value;
        document.body.insertBefore(title, document.body.firstChild);
    }
})