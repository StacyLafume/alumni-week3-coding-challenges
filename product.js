// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const product = array => array.reduce((acc, value) => acc * value, 1)
console.log(product([1,2,3,4]))
