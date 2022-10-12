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
  if(!fullList.includes(food)){
  return fullList.push(food)
  }
}
function formatPrice(initialPrice) {
  return `$${initialPrice}`
}
function decreasePrice(originalPrice) {
  var discountPrice = originalPrice * .1
  var newPrice = originalPrice - discountPrice
  return newPrice
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}


