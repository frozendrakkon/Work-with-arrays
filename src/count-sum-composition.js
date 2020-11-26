const countSumComposition = ((arr) => {
    const sum = arr.reduce((acc, cur) => acc + cur)
    const composition = arr.reduce((acc, cur) => acc * cur)
    return `Сумма ${sum} Произведение ${composition}`
      })
   console.log(countSumComposition([1, 2, 3, 4, 5, 6, 7, 8 ,9]))