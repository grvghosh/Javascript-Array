function twoSum(arr, sum) {
var resultArr = [];
for (var i = 0; i < arr.length; i++) {
if ((arr[i] + arr[i + 1]) === sum) {
resultArr.push(i, arr.indexOf(arr[i+1]));
}
}
return resultArr;
}
console.log(twoSum([10,20,10,40,50,60,70],50));
module.exports = twoSum;
