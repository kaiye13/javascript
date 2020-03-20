
//object van pizza's waaruit je kan kiezen
var pizzas = {
    Hawai:
    {
        prijs : 7.5,
        ingredienten : ["tomatensaus","mozarella", "ham", "ananas"]
        
    },
    Margaritta:
    {
        prijs : 6.0,
        ingredienten : ["tomatensaus", "mozarella"]
       
    }

}

addList();
//  Deze voegt een option toe aan de select met id pizzaLijst
//  Deze krijgt een name mee, welke de inhoud is voor de option
function addPizzaToSelect(name){
    var pizzalijst = document.getElementById("PizzaLijst");
    var option = document.createElement("option");
    option.text = name;
    pizzalijst.add(option);
}

function addList(){
    for (var i in pizzas){
        addPizzaToSelect(i);
    }
}

document.getElementById("PizzaLijst").onchange = function(){
    if (this.selectedIndex > -1){
        var pizzaNaam = this.value;
        var selectedPizza = pizzas[pizzaNaam];
        document.getElementById("showPizzaName").innerHTML = pizzaNaam;
        document.getElementById("showPizzaDetails").innerHTML = "prijs : " + selectedPizza.prijs + " €";
        document.getElementById("showPizzaDetails").innerHTML += "<br />Ingrediënten: "; 
        for (var i=0 ;i<selectedPizza.ingredienten.length;i++){
            if (i!=0){
                document.getElementById("showPizzaDetails").innerHTML += ", "
            }
            document.getElementById("showPizzaDetails").innerHTML += selectedPizza.ingredienten[i];
        }
    
    } else {
        alert ("No pizzas available");
    }
}
