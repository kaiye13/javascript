
//object van pizza's waaruit je kan kiezen
pizzas = {
    hawai: {
        prijs: 11,
        ingrediënten: [tomatensaus, kaas, ananas]
    },
    margaritha:
    {
        prijs: 10,
        ingrediënten: {tomatensaus, kaas}
    }
}

//  Deze voegt een option toe aan de select met id pizzaLijst
//  Deze krijgt een name mee, welke de inhoud is voor de option
function addPizzaToSelect(name){
    var pizzaLijst = document.getElementById("PizzaLijst");
    var option = document.createElement("option");
    option.text = name; //tekst dat gebruikt wordt in de option
    pizzaLijst.addEventListener(option);
}


