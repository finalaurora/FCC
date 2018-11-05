function largestOfFour(arr) {
    // You can do this!
    let result = [];
    let largest;
    for (let i = 0; i < arr.length; i++) {
        largest = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
        result.push(largest);
        console.log(result);
    }
    return result;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);