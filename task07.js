function fun(array) {
  var total = 0;
  
  array.forEach(arg => {
  var p = arg*arg;
    total += p;
	
  });
  return(total);
}
var array = [1,2,3,4,4,5];
console.log(fun(array));
module.exports = fun;
