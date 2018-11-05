function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    let result = str;
    result = result.split(/(?=[A-Z])|[\W_]/).join('-').toLowerCase();
    console.log(result);
    return result;
}

spinalCase('ThisIsSpinalTap');