function bubble(array, value)
{
	var c=0;
	for(let i = 0; i< array.length; i++)
	{
		if(array[i]===value)
		c=c+1;
	}
	if(c>0)
	return true;
	else
	return false;
}
var array = [6,9,8,7,5,4,3,2];
 var value = 4;
console.log(bubble(array,value));
module.exports = bubble;
