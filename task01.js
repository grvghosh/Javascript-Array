function fun(arr,n){
     var new_array;
     return (new_array = arr.slice(0,n));
}
var arr = [1,2,4,5,6,7,8,9,12];
var n = 6
console.log(fun(arr,n));
module.exports = fun;
