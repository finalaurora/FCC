function sumFibs(num) {
    let previous = 0
    var fibo = 1;
    let sum = 0;
    while (fibo <= num) {
        console.log(fibo);
        if (fibo % 2 === 1) {
            sum = sum + fibo;
        }
        fibo = fibo + previous;
        previous = fibo - previous;
    }
    return sum;
}

console.log(sumFibs(4));