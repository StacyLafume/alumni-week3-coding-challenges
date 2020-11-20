// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

const exceptLowHigh = array => array.sort((a, b) => a-b).slice(1, array.length -1).reduce((acc, value) => acc + value, 0)
console.log(exceptLowHigh([ 6, 2, 1, 8, 10 ]))