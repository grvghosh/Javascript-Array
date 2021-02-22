function move(array, position1, position2)
{
if(position1 < 0){ position1 = array.length + position1};
if(position2 < 0){ position2 = array.length + position2};
let removed = array.splice(position1, 1);
array.splice(position2, 0, removed[0]);
return array;
};
console.log(move([10, 20, 30, 40, 50], 0, 2));
module.exports = move;
