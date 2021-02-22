const getMinMax = ([...a]) => {
    var result = [],
        next = 'shift';
        
    a.sort((a, b) => a - b);
    while (a.length) {
        result.push(a[next]());
        next = { shift: 'pop', pop: 'shift' }[next];
    }
    return result;
}

var array = [2, 4, 7, 1, 3, 8, 9],
    result = getMinMax(array);

console.log(result);
module.exports = getMinMax;
