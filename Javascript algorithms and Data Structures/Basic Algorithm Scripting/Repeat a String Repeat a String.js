function repeatStringNumTimes(str, num) {
    // repeat after me
    let result = '';
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            result = result.concat(str);
        }
    }
    return result;
}

repeatStringNumTimes("abc", 3);