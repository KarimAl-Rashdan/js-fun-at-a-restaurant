function takeOrder(order, orderList) {
  if(orderList.length < 3) {
  return orderList.push(order)
  }
}

function refundOrder(orderNum, orderList) {
  for (var i = 0; i < orderList.length; i++) {//i is the idex num of each element 0, 1, 2
    // console.log("HERE", orderList[i])
    // console.log("tada", i)
    var uniqueNumber = orderList[i].orderNumber
    // console.log("orderNumber for each object", uniqueNumber)
  
    if(uniqueNumber === orderNum){
      var newList = orderList.splice(i, 1)
      return newList
    }
  }  
}
function listItems(orderList) {
  // var fullOrderList = "";
  var finalList = [];
  for (var i = 0; i < orderList.length; i++) {
    var names = orderList[i].item
    finalList.push(names)
    // fullOrderList += names
    // console.log(fullOrderList)
  }
  return finalList.join(`, `)
}
function searchOrder(orderList, foodItem) {
  var found = false
  for (var i = 0; i < orderList.length; i++) {
    if (orderList[i].item === foodItem) {
    // console.log(orderList[i].item)
    // var itemName = orderList[i].item
    // if(orderList.includes(orderList[i].item)) {
    //   console.log("THIS IS TRUE", true)
      found = true
    } 
  }
    return found
  
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}