function frequency(arr1){
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] === arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
arr2 = [item, mf];
return(arr2);

}
var arr1=[1,2,"a","e",3,"a",5,"a",4];
console.log(frequency(arr1));
module.exports = frequency;
