function merge_array_result(array1, array2) {
array1.forEach(e => {
array2 = array2.filter(f => e != f)
});
let array3 = array1.concat(array2);
return array3;
}

var array1 = [1, 2, 3];

var array2 = [2, 30, 1];

console.log(merge_array_result(array1, array2));
module.exports = merge_array_result;
