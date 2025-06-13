function sumAll(arr) {
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    let sum = 0;
  for(let i =min; i<=max;i++){
    sum +=i;
    }
    console.log(sum);
  
}
sumAll([1, 4])  // should return a number.
sumAll([1, 4])  // should return 10.
sumAll([4, 1])  // should return 10.
sumAll([5, 10])  // should return 45.