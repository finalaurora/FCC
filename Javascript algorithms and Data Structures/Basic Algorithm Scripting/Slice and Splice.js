function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let result = arr2.slice(0);
    result.splice(n, 0, ...arr1);
    console.log(result);
    return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);