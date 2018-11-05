function factorialize(num) {
    let i = 1;
    let result = 1;
    while (i <= num) {
        result = result * i;
        i++;
        console.log(result);
    }
    return result;
}

console.log(factorialize(9));