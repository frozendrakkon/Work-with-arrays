
const arrFirstLetters = ((str) => {  
  const conditionFilter = ((curElement, index, array) => {
    if(index === 0) {
      return true
    } else 
      return (array[index - 1] === " ");
  })
  const result = [].filter.call(str, conditionFilter)
  return result
  
})
console.log(arrFirstLetters("Каждый охотник желает знать, где сидит фазан."));

