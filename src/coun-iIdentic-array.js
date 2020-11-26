// нужно подсчитать сколько повторяющихся элементов попадаются в массиве 
function countIdentic(array) {
    array.sort()
    const result = []
    for(let i = 0; i < array.length; i++) {
    if(array[i] !== array[i + 1] && array[i] === array[i - 1]) {
      result.push(array[i])
    }
    }
    return result.length
  }
  console.log(countIdentic([15,14,13,19,13,14,14,14,7,9,9])); // 3