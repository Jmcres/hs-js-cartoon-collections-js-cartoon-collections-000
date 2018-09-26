function dwarfRollCall(dwarves) {
  var empty = [];

  for (var i = 0; i<dwarves.length; i++){
    if(i > dwarves.length/2){
      empty.push(dwarves[i]);
    }
  }
    return empty.join(" ");
  }


function summonCaptainPlanet(planeteerCalls){
  var empty =[];
  for(var i =0; i<planeteerCalls.length; i++){
    planeteerCalls[i] = planeteerCalls[i].toUpperCase()+ "!";
    empty.push(planeteerCalls[i]);
  }
  return empty;
}

function longPlaneteerCalls(words) {
  for(var i= 0; i<words.length; i++){
    if(words[i].length > 4){
      return true;
  }
  }
  return false;
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert", "swiss"];
  for (var i = 0; i<foods.length; i++){
    if(cheese.indexOf(foods[i]) !== -1){
      return foods[i];
    }
  }
  return "no cheese!";
}


function wordsWithB(array){
  var empty = [];
  for (var i =0; i<array.length; i++){
    if(array[i].charAt(0) === "b"){
      empty.push(array[i]);
    }
  }
  return empty;
}