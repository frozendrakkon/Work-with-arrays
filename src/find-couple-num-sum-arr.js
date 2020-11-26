const findCoupleNumSumArr = ((array, num) => {
    const result = []
       array.map((cur, index) => {
        function sum() {
             
          for(let i = 0; i < array.length; i++) {
             const curSum = cur + array[i]; // пробегаемся по массиву, суммирая текущий элемент с последующими
             
             if(curSum === num) { //задаем главное условие задачи и пушим в результат
               result.push(`Ваша пара чисел -  ${cur} + ${array[i]}`); 
             }
          }
        }
        return sum()
      })
    return result.sort().filter((cur, index) => {
      return cur !== result[index + 1]; //Фильтруем массив и сортируем, чтобы не было повторяющихся результатов(не очень удачно, перерешать)
    })
    
  });
                               
  // возьми первый элемент массива и пройдись с ним по всему массиву                             
                               
                               
                               
  console.log(findCoupleNumSumArr([1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18], 5))