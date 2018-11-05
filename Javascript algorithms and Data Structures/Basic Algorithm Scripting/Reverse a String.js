function reverseString(str) {
    var result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result = result.concat(str.charAt(i));
        console.log(result);
    }
    return result;
}

reverseString("hello");