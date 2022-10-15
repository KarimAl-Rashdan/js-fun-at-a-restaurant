class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(name, isMorning) {
    if(isMorning === true) {
      return `Good morning, ${name}!`
    } else {
    return `Hello, ${name}!`
    };
  };
  checkForFood(foodDetails) {
    var breakfastType = "breakfast";
    var lunchType = "lunch";
    var dinnerType = "dinner";
    var mealTypes = [breakfastType, lunchType, dinnerType];
    for(var i = 0; i < mealTypes.length; i++) {
      if(this.restaurant.menus[mealTypes[i]].includes(foodDetails)) {
        return `Yes, we're serving ${foodDetails.name} today!`
      } else {
        return `Sorry, we aren't serving ${foodDetails.name} today.`
      };
    };
  };
};

module.exports = Chef;