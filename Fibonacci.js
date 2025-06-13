function Fibonacci(num){
    let previus = 0;
    let current = 1;
    console.log(current);
    for(let i =1; i<num;i++){
        let next = current+previus;
        previus = current;
        current=next;
        console.log(current);
    }
}
Fibonacci(4);