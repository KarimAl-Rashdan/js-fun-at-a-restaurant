function nameMenuItem(name) {
  return `Delicious ${name}`
}
function createMenuItem(deliciousName, actualPrice, foodType) {
  return {
    name: deliciousName,
    price: actualPrice,
    type: foodType
  }
}
function addIngredients(food, fullList) {
  return fullList.push(food)
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


