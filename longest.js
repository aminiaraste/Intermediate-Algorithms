function findLongestWord(s){
    let arr = s.split(" ")
    let word=arr[0];
    for(let i = 0 ; i<arr.length;i++){
        if(word.length<arr[i].length){
            word = arr[i];
        }
        
    }
    console.log(word)
}
findLongestWord("The quick brown fox jumped over the lazy dog")  // should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") // should return 6.
findLongestWord("May the force be with you")  // should return 5.
