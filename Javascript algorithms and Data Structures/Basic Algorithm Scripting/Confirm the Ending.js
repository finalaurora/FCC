function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    console.log(str.substring(str.length - target.length, str.length));
    return (str.substring(str.length - target.length, str.length) == target) ? true : false;
}

confirmEnding("Bastian", "n");