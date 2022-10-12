function nameMenuItem(name) {
  return `Delicious ${name}`
}
function createMenuItem(deliciousName, actualPrice, foodType) {
  var menuItemDetails = {
    name: deliciousName,
    price: actualPrice,
    type: foodType
  }
  return menuItemDetails
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
function createRecipe(deliciousName, fullList, foodType) {
  var recipe = {
    title: deliciousName,
    ingredients: fullList,
    type: foodType
  }
  return recipe
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


