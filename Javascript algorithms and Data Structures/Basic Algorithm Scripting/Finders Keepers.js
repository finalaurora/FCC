function findElement(arr, func) {
    let num = [];
    num = arr.filter(func);
    if (num.length == 0) {
        return undefined;
    } else
        return num[0];
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));