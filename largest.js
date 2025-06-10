function largestOfFour(arr) {
    let newarr=[];
    for(let i = 0 ;i<arr.length;i++){
        newarr.push(arr[i][0])
        for(let j=0;j<arr[i].length;j++){
            if(newarr[i]<arr[i][j]){
                    newarr[i] = arr[i][j];
                }
                    
        }
        
    }
    return newarr;
    
}
let array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(largestOfFour(array))
//Returns [5,27,39,1001]