let sampleWord = "asda12aa";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);