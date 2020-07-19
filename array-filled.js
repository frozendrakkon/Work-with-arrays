function arrayFilled(length, num) {
    const arrNum = [];
    for(let i = 0; i < length; i++) {
       arrNum.push(num)
    }
    return arrNum
  }
  console.log(arrayFilled(10, -22))

  // Напишите функцию arrayFilled(len, value), которая возвращает массив с заданным количеством len элементов value.