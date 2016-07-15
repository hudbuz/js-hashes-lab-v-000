'use strict';


function addIngredient(object, key, value){

  object[key] = value;
  return object;

}

function removeIngredient(object, key, value){

  delete object[key];
  return object;

}


function updateIngredient(object, key, value){

  object[key] = value;
  return object;

}

function readRecipe(object) {

  for (var key in object) {
    console.log("this recipe calls for " + object[key] + " of " + key);
  }
}