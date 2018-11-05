function chunkArrayInGroups(arr, size) {
    // Break it up.
    let result = [];
    for (let i = 0; i < arr.length; i = i + size) {
        result.push(arr.slice(i, i + size));
        console.log(result);
    }
    return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);