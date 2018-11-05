function convertHTML(str) {
    // &colon;&rpar;
    let resultStr = str;
    resultStr = resultStr.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    return resultStr;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));