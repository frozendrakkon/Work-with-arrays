const arrStr3Elem = ((str) => {
    const arrElem = str.toLowerCase().split("")
    return arrElem.map((curElement, index) => {
      if (arrElem[index - 1] === undefined) {
        return curElement + arrElem[index + 1]
      } else if (arrElem[index + 1] === undefined) {
        return  arrElem[index - 1] + curElement
      } else {
        return arrElem[index - 1] + curElement + arrElem[index + 1]
      }
    })
  })
  console.log(arrStr3Elem("JavaScript")); //ja, ava, vas ...