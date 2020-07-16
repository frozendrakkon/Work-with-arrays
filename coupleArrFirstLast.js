function coupleArrFirstLast (arr) {
    const result = arr.splice(0, arr.length / 2 ).map((curElement, index) => {
      return curElement + ":" + arr[arr.length - (index + 1)]
    })
    return result
  }
  console.log(coupleArrFirstLast([0, 1, 2, 3, 4, 5, 6, 7])); // 0:7, 1:6...
  