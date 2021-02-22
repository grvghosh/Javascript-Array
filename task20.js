function binarySearch(arr,b, start, end) {
var i = start, j = end, m;
while( i < j) {
m = Math.floor((i + j )/2);
if( b <= arr[m]) j = m;
else i = m + 1;
}
if( b === arr[i]) return true;
else return false;
}
var arr = [1,2,3,4,5,6,7,8,9];
var start = 0;
var end = 8;
console.log(binarySearch(arr,1,start,end));
module.exports = binarySearch;
