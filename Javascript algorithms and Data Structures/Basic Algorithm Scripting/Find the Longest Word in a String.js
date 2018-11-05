function findLongestWordLength(str) {
    let result = 0;
    let temp = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != ' ') {
            temp++;
            if (temp > result) {
                result = temp;
            }
        } else {
            temp = 0;
        }
    }
    return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");