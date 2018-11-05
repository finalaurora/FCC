let compareFunction = (a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    else
        return -1;
}

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort(compareFunction);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]) return i;
    }
    return arr.length;
}

console.log(getIndexToIns([], 19));