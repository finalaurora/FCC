function isPrime(num) {
    if (num == 1) return 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return 0;
    }
    return 1
}

function sumPrimes(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        if (isPrime(i) == 1) {
            sum += i;
        }
    }
    return sum;
}

sumPrimes(10);