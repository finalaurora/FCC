function uniteUnique(arr) {
    var resultArr = [];
    let args = Array.prototype.slice.call(arguments);
    for (let i = 0; i < args.length; i++) {
        resultArr = resultArr.concat(args[i].filter(function (item) {
            return resultArr.indexOf(item) == -1;
        }));
    }
    return resultArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);