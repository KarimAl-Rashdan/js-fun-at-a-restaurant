function createRestaurant(restaurantName) {
  var restaurant = {}
  restaurant.name = restaurantName
  restaurant.menus = {
    breakfast: [],
    lunch: [],
    dinner: [],
  }
  return restaurant
}
function addMenuItem(restaurant, itemDetails) {
  if(itemDetails.type === "lunch" && !restaurant.menus.lunch.includes(itemDetails)){
    restaurant.menus.lunch.push(itemDetails)
  } else if (itemDetails.type === "breakfast" &&  !restaurant.menus.breakfast.includes(itemDetails)
  ) {
    restaurant.menus.breakfast.push(itemDetails)
  } else if (itemDetails.type === "dinner" &&  !restaurant.menus.dinner.includes(itemDetails)
  ) {
    restaurant.menus.dinner.push(itemDetails)
  } 
  return restaurant.menus
}
function removeMenuItem(restaurant, itemName, itemType) {
  var itemDetails = restaurant.menus[itemType]
  // console.log("current array:", restaurant.menus)
  for (var i = 0; i< itemDetails.length; i++){
    if(itemDetails[i].name === itemName)
    {
      restaurant.menus[itemType].splice(i,1)
      // console.log("updated array", restaurant.menus)
      return`No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`
    }
  }
  return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}
module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}