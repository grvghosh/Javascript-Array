let arr = [10, 5, 3, 9, 2, 3]
let x = 7

let sortByDiff = (arr,x) => arr.sort((a,b)=> Math.abs(a-x) - Math.abs(b-x))

console.log(sortByDiff(arr,x))
module.exports = sortByDiff;
