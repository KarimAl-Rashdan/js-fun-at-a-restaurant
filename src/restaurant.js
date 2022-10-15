function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  return restaurant;
};

function addMenuItem(restaurant, itemDetails) {
  var breakfastType = "breakfast";
  var lunchType = "lunch";
  var dinnerType = "dinner";
  var mealTypes = [breakfastType, lunchType, dinnerType];
  for(var i = 0; i < mealTypes.length; i++) {
    if(itemDetails.type === mealTypes[i] && !restaurant.menus[mealTypes[i]].includes(itemDetails)) {
      restaurant.menus[mealTypes[i]].push(itemDetails);
    };
  };
  return restaurant.menus;
};

function removeMenuItem(restaurant, itemName, itemType) {
  var itemDetails = restaurant.menus[itemType];
  for (var i = 0; i < itemDetails.length; i++) {
    if(itemDetails[i].name === itemName) {
      itemDetails.splice(i,1);
      return `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`
    };
  };
  return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
};

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
};