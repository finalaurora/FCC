function sumAll(arr) {
    var temp = arr;
    temp.sort((a, b) => {
        return a - b;
    })
    let result = 0;
    for (let i = temp[0]; i <= temp[1]; i++) {
        result += i;
    }
    return result;
}

sumAll([1, 4]);