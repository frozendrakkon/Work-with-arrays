// Напишите функцию arrayFilled(length, value), которая возвращает массив с заданным количеством length элементов value.

function arrayFilled(length, value) {
  const arrNum = [];
  for (let i = 0; i < length; i++) {
    arrNum.push(value);
  }
  return arrNum;
}
console.log(arrayFilled(10, -22));
