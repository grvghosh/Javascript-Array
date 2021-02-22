function removeItem(array, value){
	var filteredItems = []; var c;
    for(var i in array){
        if(array[i]==value){
          
			//const filteredItems = array.slice(0, i).concat(array.slice(i + 1, array.length));
			filteredItems = array.filter(array => array !== value);
			c = 1;
            break;
        }
	 }
	if(c==1)
	return filteredItems;
	else
	return false;
}

var array = [6,9,8,7,5,4,3,2];
 var value = 4;
console.log(removeItem(array,value));
module.exports = removeItem;
