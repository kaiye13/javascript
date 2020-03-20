$(document).ready(function(){

// Ingrediënten en pizzas en winkelmandje zijn globale objecten
// zo zijn ze eigenlijk eigenschappen van de pagina
// We voegen al een paar ingrediënten en pizza's toe bij opstarten.
// Het winkelmandje is leeg bij opstarten. 

var ingredients=["tomatensaus","hesp","mozarella","ananas"];
var pizzas = {
	Hawai:{
		//name: "Hawai",
		price:7.5,
		ingredients:["tomatensaus","hesp","mozarella","ananas"],
		aantal:0
	},
	Margherita:{
		//name: "Margherita",
		price:6.5,
		ingredients:["tomatensaus","mozarella"],
		aantal:0
	}
};

//We voeren bij opstarten de functie addList uit
//om bij opstarten de hierboven gemaakte pizzas en ingrediënten te tonen
addList();

//De functie voegt een optie toe aan de pizza selectielijst
//en plaatst hier de tekst in die meegegeven wordt met name  
function addPizzaToSelect(name){
	$("#pizzaLijst").append("<option>"+name+"</option>");
	$("#pizzaLijst").attr("size", Object.keys(pizzas).length);
}

//De functie voegt een optie toe aan de ingrediënten selectielijst
//en plaatst hier de tekst in die meegegeven wordt met name 
function addIngredientToSelect(name){

}

//De functie vult de 2 lijsten met: 
// - de pizza's die in het object pizzas zitten
// - de ingrediënten die in de array ingredients zitten
function addList(){
	for (var i in pizzas){
		addPizzaToSelect(i);
		//i is de eerste keer "Hawai" en de tweede keer "Margherita"
		//i is dus een String die de naam van de pizzas voorstelt
		//Omdat pizza een Object is (en geen Array)
		// bestaat pizzas.length niet of geeft dit de waarde 0
	}
	
	for (var i=0; i<ingredients.length; i++){
		addIngredientToSelect(ingredients[i]);
		//voor een array kunnen we niet werken met for in
		//we kunnen wel een for maken aan de hand van de lengte van de array
		//i is dus een getal, van 0 tot de lengte-1
	}
}

// De functie berekent het totaal en past het aan in het winkemandje
function updateTotaal(){

}

// De functie voegt een rij toe aan het winkelmandje
// De rij bestaat uit de prijs, de naam, subtotaal en 3 knoppen
// Aan de knoppen wordt ook een event gehangen.
function addRowToWinkelmandje(naam){
	// Maak 3 knoppen aan

	// Maak buttongroup aan
	
	// Maak kolom aan
	
	// Voeg knoppen toe aan buttongroup
	
	// Voeg buttongroup toe aan kolom
	
	// Voeg rij toe aan aan winkelmandje
	
	// Voeg kolom met met buttongroup toe aan rij
	
	// Voeg het attribuut type met waarde button toe aan de knoppen + voeg de klasse btn btn-info toe aan de knoppen
	
	// De add knopt voegt 1 pizza toe van deze pizzanaam
		
	// De remove knopt verwijdert 1 pizza van deze pizzanaam
	
	// De delete knop verwijdert alle pizzas van deze pizzanaam

}

// Deze functie verwijdert de volledige rij
// om geen geheugen lekken te hebben worden ook de events van de knoppen verwijdert.
function removeRowFromWinkelmandje(naam){

}

// Deze functie past het aantal pizzas en subtotaal van een rij aan.
function updateRowWinkelmandje(naam){

}

// --EVENTS-- //
//Wanneer we de pizzalijst wijzigen of met andere woorden
//een pizza in de lijst aangeduid wordt 
//tonen we de details van deze pizza
	//event function()
	/*var pizzaNaam
	var selectedPizza = pizzas[pizzaNaam];
	
	if (selectedPizza == undefined){
		prompt("No pizzas available")
	}else{
	
	
		for (var i=0; i<selectedPizza.ingredients.length; i++){
			var toShow;
			if (i==0){
				toShow = selectedPizza.ingredients[i];
			}else{
				toShow = ", " + selectedPizza.ingredients[i];
			}

			
		}
	}
	*/


//Wanneer de knop Add Pizza gedrukt wordt
//moeten we het aantal van de actieve pizza verhogen
//was aantal nog 0 dan voegen we een regel toe aan het winkelmandje
//wanneer de pizza al in het winkelmandje zit, moeten we de regel updaten
//We passen ook het totaal bedrag aan.
	//event function()
	//Lees en converteer aantal
	/*var aantal = 
	
	if ((aantal != NaN) && (aantal > 0)){
		//Bekijk welke en controleer of er een pizza geselecteerd is
		var pizzaNaam = 
		var selectedPizza = pizzas[pizzaNaam];
		if (selectedPizza != undefined){
			// zit deze pizza nog niet in het winkelmandje?
			// dan voegen we deze toe
			if (selectedPizza.aantal < 1) {
				selectedPizza.aantal = aantal;
				addRowToWinkelmandje(pizzaNaam);
				updateTotaal();
			
			} else {
			//zit deze wel al in het winkelmandje
			//dan verhogen we het aantal 
				selectedPizza.aantal += aantal;
				updateRowWinkelmandje(pizzaNaam);
				updateTotaal();
			}
			
			
		} else {
			alert("Selecteer de pizza die je wil bestellen.");
		}
			
	} else {
		alert("Vul het aantal pizzas dat je wilt bestellen in.");
	}
*/


//Wanneer de knop Add extra Pizza gedrukt wordt
//stellen we een nieuwe pizza samen
//voegen deze toe aan het object pizzas
//en tonen deze in de selectielijst
    //function(){
	//Lees de ingevulde naam en prijs
	/*var pizzaNaam =
	var pizzaPrijs =
	var selectedIngredienten = [];
	
	
	//Controleer de ingave
	if (pizzaNaam.length < 1 || isNaN(pizzaPrijs) || pizzaPrijs <= 0 || selectedIngredienten.length <= 0) {
		alert("De gegevens om een pizza toe te voegen zijn niet volledig of niet correct.");
	// controleer of de pizza al bestaat.
	} else if(pizzas[pizzaNaam]){
		alert("Deze pizza bestaat al.");
	} else {
	// wanneer de ingave correct is
	// voeg een nieuwe pizza toe aan het object pizzas
	// en voeg het toe aan de pizza selectielijst
		pizzas[pizzaNaam] = {
			price: pizzaPrijs, 
			ingredients: selectedIngredienten,
			aantal:0
			};
		addPizzaToSelect(pizzaNaam);
	}
*/

//Wanneer de knop Add extra ingreiënt gedrukt wordt
//voegen dit toe aan de array ingredients
//en tonen deze in de selectielijst
	//function(){
	/*var nieuwIngredient = 
	
	//controleer of een ingredient werd ingegeven
	if (nieuwIngredient.length > 0){
		//controleer of het ingredient al bestaat
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
*/

});