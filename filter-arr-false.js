// Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).
array = [NaN, 0, 77, false, -17, '',undefined, 99, null];

function filterFalse(arr) {
   const result = arr.filter((curElement) => {
    if (curElement !== false)  return curElement
  })
   return result
}
console.log(filterFalse(array))