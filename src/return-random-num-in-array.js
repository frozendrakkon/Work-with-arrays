function randomElement(arr) {
    const randomNum = Math.floor(Math.random() * (arr.length));
     return arr[randomNum]
 }
 
 console.log(randomElement([1, 5, 12, 56, 4]))