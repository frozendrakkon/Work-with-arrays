// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены
//  повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
function removeDuplicates(arr) {
    arr.sort()
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === arr[i + 1]) {
        arr.splice(i, 1)
      }
    }
     return arr.join()
   }
   
   console.log(removeDuplicates(["php", "css", "php", "css",
     "script", "script", "html", "html", "java"]));  // [php,css,script,html,java] 