let username = "JackOfAllTrades";
let userCheck = /[a-zA-Z].+\d*$/i; // Change this line
let result = userCheck.test(username);
console.log(result);