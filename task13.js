function add(int,num)
{
	var arr = [];
	var n;
	arr[0] = int;
	for(var i=0; i<num-1;i++)
	{
		n = arr[i]+1;
		arr.push(n);
	}
	return arr;	
}
module.exports = add;
