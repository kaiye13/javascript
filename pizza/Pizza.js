

var ingredients=["tomatensaus","hesp","mozarella","ananas"];
var pizzas = {
	Hawai:{
		
		price:7.5,
		ingredients:["tomatensaus","hesp","mozarella","ananas"]
	},
	Margherita:{
		
		price:6.5,
		ingredients:["tomatensaus","mozarella"]
	}
};
var winkelmandje = [];


addList();
//toevoegen van de pizaa's in de lijst
function addPizzaToSelect(name){
	var pizzalijst = document.getElementById("pizzaLijst");
	var option = document.createElement("option");
	option.text = name; 
	pizzalijst.add(option); 
}

//toevoegen van ingredienten aan de ingredienten lijst
function addIngredientToSelect(name){
	var pizzalijst = document.getElementById("ingredientenLijst");
	var option = document.createElement("option");
	option.text = name; 
	pizzalijst.add(option);  
}
//toevoegen aan de lijst
function addList(){
	for (var i in pizzas){
	
		addPizzaToSelect(i);

	}
	
	for (var i=0; i<ingredients.length; i++){
		addIngredientToSelect(ingredients[i]);

	}
}

//tonen van het winkelmandje
function toonWinkelmandje(){
	var tabel = document.getElementById("winkelmandje");
	var totaalrij = document.getElementById("totaalrij");

	while (tabel.children.length > 2){
		tabel.removeChild(tabel.children[1]);  
	}

	var totaal = 0;

	for (var pizza in winkelmandje){

		totaal += winkelmandje[pizza].subtotaal

		var rij = document.createElement("tr");  
		var aantalKolom = document.createElement("td");
		var naamKolom = document.createElement("td");
		var subtotaalKolom = document.createElement("td");
		var aantalText = document.createTextNode(winkelmandje[pizza].aantal); 
		var naamText = document.createTextNode(pizza); 
		var prijsText = document.createTextNode(winkelmandje[pizza].subtotaal); 
		aantalKolom.appendChild(aantalText); //!! 
		naamKolom.appendChild(naamText);	//!!
		subtotaalKolom.appendChild(prijsText); //!!

		rij.appendChild(aantalKolom);
		rij.appendChild(naamKolom);
		rij.appendChild(subtotaalKolom);

		tabel.insertBefore(rij, totaalrij); 
	}

	document.getElementById("totaal").innerHTML = totaal;
}

document.getElementById("pizzaLijst").onchange = function() {
	if (this.selectedIndex > -1){
	  var pizzaNaam = this.value;
	  var selectedPizza = pizzas[pizzaNaam];
	  document.getElementById("showPizzaName").innerHTML = pizzaNaam;
	  document.getElementById("showPizzaDetails").innerHTML = "Prijs: " + selectedPizza.price + "€";
	  document.getElementById("showPizzaDetails").innerHTML += "<br />Ingrediënten: ";
	  for (var i=0; i<selectedPizza.ingredients.length; i++){
		if (i!=0){
			document.getElementById("showPizzaDetails").innerHTML += ", "
		}
		document.getElementById("showPizzaDetails").innerHTML += selectedPizza.ingredients[i];
		}
	
	} else { 
	  alert("No pizzas available");
	}
}
//oerder pizza button
document.getElementById("orderPizza").onclick = function() {

	var aantal = +document.getElementById("aantal").value;
	if ((aantal != NaN) && (aantal > 0)){

		var pizzalijst = document.getElementById("pizzaLijst");
		if (pizzalijst.selectedIndex > -1){
			var pizzaNaam = pizzalijst.value;
	
			var selectedPizza = pizzas[pizzaNaam];
			

			if (!winkelmandje[pizzaNaam]) {
				winkelmandje[pizzaNaam] = {
					aantal: aantal, 
					subtotaal: aantal*selectedPizza.price
				};
			
			} else {

				winkelmandje[pizzaNaam].aantal += aantal;
				winkelmandje[pizzaNaam].subtotaal = winkelmandje[pizzaNaam].aantal*selectedPizza.price;
			}
			toonWinkelmandje();
			
		} else {
			alert("Selecteer de pizza die je wil bestellen.");
		}
			
	} else {
		alert("Vul het aantal pizzas dat je wilt bestellen in.");
	}
}

//add pizza button
document.getElementById("addPizza").onclick = function() {
	var pizzaNaam = document.getElementById("pizzaName").value;
	var pizzaPrijs = +document.getElementById("pizzaPrijs").value;
	var ingredientenLijst = document.getElementById("ingredientenLijst").options;
	var selectedIngredienten = [];
	
	for (var i = 0; i < ingredientenLijst.length; i++){
		if (ingredientenLijst[i].selected){
			selectedIngredienten.push(ingredientenLijst[i].value);
		}
	}
	
	if (pizzaNaam.length < 1 || isNaN(pizzaPrijs) || pizzaPrijs <= 0 || selectedIngredienten.length <= 0) {
		alert("De gegevens om een pizza toe te voegen zijn niet volledig of niet correct.");
	} else if(pizzas[pizzaNaam]){
		alert("Deze pizza bestaat al.");
	} else {
		pizzas[pizzaNaam] = {
			price: pizzaPrijs, 
			ingredients: selectedIngredienten
			};
		addPizzaToSelect(pizzaNaam);
	}
	
}
//add ingredient button
document.getElementById("addIngredient").onclick = function() {
	var nieuwIngredient = document.getElementById("ingredient").value;
	
	
	if (nieuwIngredient.length > 0){
		
		var bestaatAl = false;
		for (var i = 0; i<ingredients.length; i++){
			if (nieuwIngredient == ingredients[i]){
				alert("ingredient bestaat al");
				bestaatAl = true;
			}
		}
		if (!bestaatAl){
			ingredients.push(nieuwIngredient);
			addIngredientToSelect(nieuwIngredient);
		}
	}else{
		alert("Geef ingredient in.")
	}
}