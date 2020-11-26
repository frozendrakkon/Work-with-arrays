// Напишите код, объединяющий три массива цифр, и располагающий, с помощью метода pop(), цифры в полученном массиве в порядке убывания их значений через пробел.
const a = [1,2,3];
const b = [4,5,6];
const c = [7,8,9];
function getArr(a, b, c) {
  const result = []
  const fusion = a.concat(b, c)
   for(let i = fusion.length; i > 0; i--) {
      result.push(fusion.pop())   
   }
  return result.join(" ")
}

console.log(getArr(a, b, c)); // [9 8 7 6 5 4 3 2 1] 