let ohStr = "Ohhhhhhh no";
let ohRegex = /[^h]h{3,6}[^h]/; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);