// показать первые n элементов массива
function getFirst(array, n) {
    const result = []
    for ( let i = 0; i < n; i++) {
     result.push(array[i])
    }
    return result
  }
  console.log(getFirst(["sega", "maks", "roma", "artur", "dima"], 3))