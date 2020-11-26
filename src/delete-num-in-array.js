function removeItem(arr, num) {
    return arr.filter((curElement) => {
      return curElement !== num
    })
  }
  
  console.log(removeItem([3, 5, 7, 8, 5], 5)); // [3,7,8] 