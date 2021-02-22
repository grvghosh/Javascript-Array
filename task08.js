function fun(array) {
  var total = 0;
  var prod = 1;
  array.forEach(arg => {
    total += arg;
	prod = prod*arg;
  });
  var arr2=[total, prod];
  return(arr2);
}
var array = [1,2,3,4,4,5];
console.log(fun(array));
module.exports = fun;
