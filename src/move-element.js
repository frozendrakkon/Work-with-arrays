function moveElement(arr,from, to) {
    arr.splice(to, 0, arr.splice(from, 1) [0]);
   return arr
 }
 const arr = [ 'a', 'b', 'c', 'd', 'e'];
 console.log(moveElement(arr, 4, 0));
 
 
 // ["a", "d", "b", "c", "e"];