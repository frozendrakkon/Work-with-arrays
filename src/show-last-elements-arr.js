// показать последние  n элементы массива
function getFirst(array, n) {
    const result = []
    for ( let i = array.length - 1; i > 0; i--) {
     result.push(array[i])
    }
    return result
  }
  console.log(getFirst(["sega", "maks", "roma", "artur", "dima"], 3))