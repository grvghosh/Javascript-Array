function duplicate(yourArray){
	let duplicates = [];
	const tempArray = yourArray.sort();
for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicates.push(tempArray[i])
  }
}
return duplicates;
}
var yourArray = [1, 1, 2, 3, 4, 5, 5];
console.log(duplicate(yourArray));
module.exports = duplicate;
