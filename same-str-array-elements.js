function startingSubstring(arr) {
    const str1 = arr[0]
    const str2 = arr[1]
    const result = []
    
    for(let i = 0; i < str2.length; i++) {
      while(str1[i] === str2[i]) {
       result.push(str1[i])
       break
      }
    }
    return result.join("")
  }
  
  console.log(startingSubstring(['Капуста', 'Капитал']))