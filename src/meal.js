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


module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


