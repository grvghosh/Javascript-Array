function duplicate(array){
var new_array = [];
let len = array.length;
for(let i = 0; i < len; i++)
{
	if(new_array.indexOf(array[i])===-1)
	{
		new_array.push(array[i]);
	}
}
return new_array;
}
var array = [1, 1, 2, 3, 4, 5, 5];
console.log(duplicate(array));
module.exports = duplicate;
