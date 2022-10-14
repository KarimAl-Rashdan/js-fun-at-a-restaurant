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
module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}