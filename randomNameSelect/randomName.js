var myRandomNames = [

    "Frodo",
    "Guus",
    "zwieber",

    "Murphy",
    "max",
    "scotty",
    "ozzy",
    "spike"
  ];
  
  
  document.getElementById("chooseButton").onclick = function () {
    var randomName = myRandomNames[Math.floor(Math.random()*myRandomNames.length)];
    document.getElementById("name").innerHTML = "hallo mijn naam is " + randomName;
  }
  