function destroyer(arr) {
    // Remove all the values
    var args = Array.prototype.slice.call(arguments);
    for (let i = 1; i < args.length; i++) {
        args[0] = args[0].filter((item) => {
            return item != args[i];
        })
    }
    console.log(args[0]);
    return args[0];
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);