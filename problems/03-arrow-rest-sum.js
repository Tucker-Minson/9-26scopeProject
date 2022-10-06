/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/

// Your code here
const arrowRestSum = (...para) => {
  let arr = [...para]
  let newArr =arr.reduce(function(preVal, currVal){
    return preVal + currVal
  },0)
  console.log(newArr)
  return newArr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  module.exports = null;
}
