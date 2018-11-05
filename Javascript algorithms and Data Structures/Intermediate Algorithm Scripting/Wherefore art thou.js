function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var srcKeys = Object.keys(source);
    console.log(srcKeys);
    arr = collection.filter((obj) => {
        for (let i = 0; i < srcKeys.length; i++) {
            if (obj.hasOwnProperty(srcKeys[i] == false) || obj[srcKeys[i]] !== source[srcKeys[i]]) return false
        }
        return true
    })
    // Only change code above this line
    return arr;
}

whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});