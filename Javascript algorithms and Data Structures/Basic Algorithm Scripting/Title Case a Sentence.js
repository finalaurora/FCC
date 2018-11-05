function titleCase(str) {
    let words;
    let tempChar;
    words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
        tempChar = words[i][0].toUpperCase();
        words[i] = tempChar.concat(words[i].substr(1, words[i].length - 1))
    }
    let result = words[0];
    for (let i = 1; i < words.length; i++) {
        result = result.concat(' ').concat(words[i]);
    }
    console.log(result);
    return result;
}

titleCase("ace");