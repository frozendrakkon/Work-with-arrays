
// нужно посчитать сумму двух массивов 
// arr1 = [1, 2, 3]; arr2 = [3, 2, 1]; result = [4, 4, 4]
const arr1 = [1, 2, 3, 4, 5, 0, 0, 0];
const arr2 = [8, 2, 3, 14, 2, 45, 1]
const newArr = []
function concatArrSum() {
  const arrShort = arr1.length <= arr2.length ? arr1 : arr2
  const arrLong = arr1.length > arr2.length ? arr1 : arr2
  arrShort.length = arrLong.length;

  for (let i = 0; i < arrLong.length; i++) {
    if(arrShort[i] === undefined) {
      newArr.push(arrLong[i])
    } else
       newArr.push(arrLong[i] + arrShort[i])
    }
    
  return newArr
}
console.log(concatArrSum())