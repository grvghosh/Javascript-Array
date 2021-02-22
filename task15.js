function bubble(array, n){
for (let i = 0; i< array.length - 1; i++) {
for (let j = 0; j< array.length - 1 -i; j++) {
if (array[j]<array[j+1]) {
 const temp = array[j];
 array[j] = array[j+1];
 array[j+1] = temp;
 }
 }
 }
 return array[n];
 }
 var array = [6,9,8,7,6,5,4,3,2];
 var n = 4;
console.log(bubble(array,n));
module.exports = bubble;
