// Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.
const array1 = [5, 2, 1, -10, 8];
const array2 = [5, 2, 1, -9, 3, 7]; 

const union = function(array1, array2) {
  const concat = array1.concat(array2)
  concat.sort()
  for(let i = 0; i < concat.length; i++) {
    if(concat[i] === concat[i + 1]) {
      (concat.splice(i, 1))
    }
  }
  return concat
}
console.log(union(array1, array2)); // [-10,8,5,2,1,-9,3,7] 