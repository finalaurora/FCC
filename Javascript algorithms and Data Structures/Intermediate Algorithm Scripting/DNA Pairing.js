function pairElement(str) {
    let arr = str.split('');
    let result = [];
    let DNA = {
        A: "T",
        T: "A",
        G: "C",
        C: "G"
    };
    for (let i = 0; i < arr.length; i++) {
        result.push([arr[i], DNA[arr[i]]]);
    }
    return result;
}

pairElement("GCG");