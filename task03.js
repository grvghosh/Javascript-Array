function fun(number){
var numArr = number.toString().split("");
var result = [];
for(var i = 0 ; i < numArr.length; i++){
if(numArr[i] % 2 === 0 && numArr[i+1] % 2 === 0) {
result.push(numArr[i]);
result.push('-');
} else {
result.push(numArr[i]);
}
}
return result.join('');
}
var number = 698765432;
console.log(fun(number));
module.exports = fun;
