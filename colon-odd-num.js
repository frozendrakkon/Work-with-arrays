// Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), 
// которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя 
// нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.
const num = prompt('Введите число', 123321123321);
 let result = [num[0]];
function colonOdd (num) {
  num.split("")
  for(let i = 1; i < num.length; i++) {
    if((num[i - 1]%2 !== 0)&&(num[i] % 2 !== 0)) {
  result.push(':', num[i]);
      } else {
        result.push(num[i])
      }
  }
  return result.join("")
}
console.log(colonOdd(num)); // 5:5