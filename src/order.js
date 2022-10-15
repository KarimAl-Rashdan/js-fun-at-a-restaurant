function takeOrder(order, orderList) {
  if(orderList.length < 3) {
  return orderList.push(order);
  };
};

function refundOrder(orderNum, orderList) {
  for (var i = 0; i < orderList.length; i++) {
    var uniqueNumber = orderList[i].orderNumber;
    if(uniqueNumber === orderNum) {
      var newList = orderList.splice(i, 1);
      return newList;
    };
  } ; 
};

function listItems(orderList) {
  var finalList = [];
  for (var i = 0; i < orderList.length; i++) {
    var names = orderList[i].item;
    finalList.push(names);
  }
  return finalList.join(`, `);
};

function searchOrder(orderList, foodItem) {
  var found = false;
  for (var i = 0; i < orderList.length; i++) {
    if (orderList[i].item === foodItem) {
      found = true;
    };
  };
    return found;
};



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};