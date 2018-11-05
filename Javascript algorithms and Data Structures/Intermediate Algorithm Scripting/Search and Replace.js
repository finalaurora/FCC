function myReplace(str, before, after) {
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        after = after.split('');
        after[0] = after[0].toUpperCase();
        after = after.join('');
    } else {
        after = after.split('');
        after[0] = after[0].toLowerCase();
        after = after.join('');
    }
    console.log(str.replace(before, after));
    return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");