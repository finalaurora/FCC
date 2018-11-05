function alphabet(char) {
  if (char >= 65 && char <= 90) {
    char = (char - 65);
    char = ((char + 26) - 13) % 26;
    char = char + 65;
  }
  return char;
}

function rot13(str) { // LBH QVQ VG!
  var result = '';
  for (var i = 0; i < str.length; i++) {
    result = result.concat(String.fromCharCode(alphabet(str.charCodeAt(i))));
    console.log(String.fromCharCode(alphabet(str.charCodeAt(i))));
  }
  return result;
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");