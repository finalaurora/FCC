// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    let temp = title.match(/\S+/g);
    return temp.join("-").toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle);
console.log(urlSlug(" What is love")); // Should be "winter-is-coming"