function currentSums(numbers) {
    const result = []
    
    numbers.reduce((acc, cur, index) => {
      return result[index] = acc + cur
    }, 0)
    return result
    }
    console.log(currentSums([2, 3, 5, 7, 11, 13, 17]));
  