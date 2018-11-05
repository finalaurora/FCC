function steamrollArray(arr) {
    // I'm a steamroller, baby
    let result = [];
    let flat = (arg) => {
        if (!Array.isArray(arg)) {
            result.push(arg);
        } else {
            for (var a in arg) {
                flat(arg[a]);
            }
        }
    }
    arr.forEach(flat);
    console.log(result);
    return result;
}

steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);