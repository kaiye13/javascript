$(document).ready(function(){

    // Ingrediënten, pizzas en winkelmandje zijn globale objecten
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
        //console.log(Object.keys(pizzas).length);
        $("#pizzaLijst").attr("size", Object.keys(pizzas).length);
    }
    
    //De functie voegt een optie toe aan de ingrediënten selectielijst
    //en plaatst hier de tekst in die meegegeven wordt met name 
    function addIngredientToSelect(name){
        $("#ingredientenLijst").append("<option>"+name+"</option>");
        //console.log(ingredients.length);
        $("#ingredientenLijst").attr("size", ingredients.length);
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
        var totaal = 0
        for (var pizza in pizzas){
            totaal += pizzas[pizza].aantal * pizzas[pizza].price;
        }	
        $("#winkelmandje #totaal").html(totaal);
    }
    
    // De functie voegt een rij toe aan het winkelmandje
    // De rij bestaat uit de prijs, de naam, subtotaal en 3 knoppen
    // Aan de knoppen wordt ook een event gehangen.
    function addRowToWinkelmandje(naam){
        // Maak 3 knoppen aan
        var addOneButton = $("<button id ='add"+naam+"'>+</button>");
        var removeOneButton = $("<button id ='remove"+naam+"'>-</button>");
        var deleteButton = $("<button id ='delete"+naam+"'>Delete</button>");
        
        // Maak buttongroup aan
        var buttonGroup = $("<div class='btn-group' role='group' aria-label='Add remove buttons'></div>");
        
        // Maak kolom aan
        var column= $("<td></td>");
        
        // Voeg knoppen toe aan buttongroup 
        buttonGroup.append(addOneButton);
        buttonGroup.append(removeOneButton);
        buttonGroup.append(deleteButton);
        
        // Voeg buttongroup toe aan kolom
        column.append(buttonGroup);
        
        // Voeg rij toe aan winkelmandje
        $("#winkelmandje tr:last").before("<tr id='"+naam+"'><td class='aantal'>"+pizzas[naam].aantal+"</td><td>"+naam+"</td><td class='subtotaal'>"+pizzas[naam].price*pizzas[naam].aantal+"</td></tr>");
        
        // Voeg kolom met met buttongroup toe aan rij 
        $("#winkelmandje tr#"+naam).append(column);
        
        // Voeg het attribuut type met waarde button toe aan de knoppen + voeg de klasse btn btn-info toe aan de knoppen
        $("#winkelmandje button").attr("type", "button");
        $("#winkelmandje button").addClass("btn");
        $("#winkelmandje button").addClass("btn-info");
        
        // De add knopt voegt 1 pizza toe van deze pizzanaam
        $("#winkelmandje button#add"+naam).on("click", function(){
            var pizza = $(this).attr("id").slice(3);
            //console.log(pizza);
            pizzas[pizza].aantal ++;
            updateRowWinkelmandje(pizza);
            updateTotaal();
        });
        
        // De remove knopt verwijdert 1 pizza van deze pizzanaam
        $("#winkelmandje button#remove"+naam).on("click", function(){
            var pizza = $(this).attr("id").slice(6);
            //console.log(pizza);
            pizzas[pizza].aantal --;
            if ((pizzas[pizza].aantal)<1){
                removeRowFromWinkelmandje(pizza);
            } else {
                updateRowWinkelmandje(pizza);
            }
            updateTotaal();
        });
        
        // De delete knop verwijdert alle pizzas van deze pizzanaam
        $("#winkelmandje button#delete"+naam).on("click", function(){
            var pizza = $(this).attr("id").slice(6);
            //console.log(pizza);
            pizzas[pizza].aantal = 0;
            removeRowFromWinkelmandje(pizza);
            updateTotaal();
        });
    }
    
    // Deze functie verwijdert de volledige rij
    // om geen geheugen lekken te hebben worden ook de events van de knoppen verwijdert.
    function removeRowFromWinkelmandje(naam){
        $("#winkelmandje button#add"+naam).off();
        $("#winkelmandje button#remove"+naam).off();
        $("#winkelmandje button#delete"+naam).off();
        $("#winkelmandje tr#"+naam).remove();
    }
    
    // Deze functie past het aantal pizzas en subtotaal van een rij aan.
    function updateRowWinkelmandje(naam){
        $("#winkelmandje tr#"+naam+" td.aantal").html(pizzas[naam].aantal);
        $("#winkelmandje tr#"+naam+" td.subtotaal").html(pizzas[naam].price*pizzas[naam].aantal);
    }
    
    // --EVENTS-- //
    //Wanneer we de pizzalijst wijzigen of met andere woorden
    //een pizza in de lijst aangeduid wordt 
    //tonen we de details van deze pizza
    $("#pizzaLijst").change(function() {
        var pizzaNaam = $("#pizzaLijst option:selected").val();
        var selectedPizza = pizzas[pizzaNaam];
        
        if (selectedPizza == undefined){
            prompt("No pizzas available")
        }else{
            $("#showPizzaName").html(pizzaNaam);
            $("#showPizzaDetails").html("Prijs: " + selectedPizza.price + "€" +"<br />Ingrediënten: ");
            
            for (var i=0; i<selectedPizza.ingredients.length; i++){
                var toShow;
                if (i==0){
                    toShow = selectedPizza.ingredients[i];
                }else{
                    toShow = ", " + selectedPizza.ingredients[i];
                }
                $("#showPizzaDetails").html(function(i, current){
                    return (current + toShow);
                });
                //$("#showPizzaDetails").html($("#showPizzaDetails").html() + toShow);
                // kan zowel opgelost worden met een callback function als door de getter te gebruiken binnen de setter functie .html()
            }
        }
    });
    
    
    //Wanneer de knop Add Pizza gedrukt wordt
    //moeten we het aantal van de actieve pizza verhogen
    //was aantal nog 0 dan voegen we een regel toe aan het winkelmandje
    //wanneer de pizza al in het winkelmandje zit, moeten we de regel updaten
    //We passen ook het totaal bedrag aan.
    $("#orderPizza").click(function(){
        //Lees en converteer aantal
        var aantal = +$("#aantal").val();
        
        if ((aantal != NaN) && (aantal > 0)){
            //Bekijk welke en controleer of er een pizza geselecteerd is
            var pizzaNaam = $("#pizzaLijst option:selected").val();
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
    });
    
    
    //Wanneer de knop Add extra Pizza gedrukt wordt
    //stellen we een nieuwe pizza samen
    //voegen deze toe aan het object pizzas
    //en tonen deze in de selectielijst
    $("#addPizza").click(function(){
        //Lees de ingevulde naam en prijs
        var pizzaNaam = $("#pizzaName").val();
        var pizzaPrijs = +$("#pizzaPrijs").val();
        var selectedIngredienten = [];
        $('#ingredientenLijst option:selected').each(function() { 
            selectedIngredienten.push($(this).val())
        });
        
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
    });
    
    //Wanneer de knop Add extra ingreiënt gedrukt wordt
    //voegen dit toe aan de array ingredients
    //en tonen deze in de selectielijst
    $("#addIngredient").click(function(){
        var nieuwIngredient = $("#ingredient").val();
        
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
    });
    
    });