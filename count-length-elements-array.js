const countLengthElementsArray = ((arrElements) => {
    const result = arrElements
    .map((curElement, index, array) => {
      return curElement.length
    })
    return result
  })
  console.log(countLengthElementsArray(['Капуста', 'Репа', 'Редиска', 'Морковка'])); // 7, 4, 7, 8