function takeOrder(order, orderList) {
  if(orderList.length < 3) {
  return orderList.push(order)
  }
}
// var uniqueNumber = orderList[i].orderNumber

function refundOrder(orderNum, orderList) {
  for (var i = 0; i < orderList.length; i++) {//i is the idex num of each element 0, 1, 2
    // console.log("HERE", orderList[i])
    var uniqueNumber = orderList[i].orderNumber
    // console.log("orderNumber for each object", uniqueNumber)
  
  if(uniqueNumber === orderNum){
    var newList = orderList.splice(i, 1)
    return newList
    

  }
  }
    
}





module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}