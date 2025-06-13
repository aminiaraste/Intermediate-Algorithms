function titleCase(input){
    s = input.toLowerCase().split(" ");
    let newS=[];
    for(let i =0; i <s.length ; i++){
        newS.push(s[i][0].toUpperCase()+ s[i].slice(1));
    }
    console.log(newS.join(" "))
}
titleCase("I'm a little tea pot")  // should return a string.
titleCase("I'm a little tea pot")  // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt")  // should return "Short And Stout".