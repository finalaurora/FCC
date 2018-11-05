function fearNotLetter(str) {
    let start = str.charCodeAt(0);
    let end = str.charCodeAt(str.length - 1);
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== start + i) {
            return String.fromCharCode(start + i);
        }
    }
    return undefined;
}

fearNotLetter("abce");