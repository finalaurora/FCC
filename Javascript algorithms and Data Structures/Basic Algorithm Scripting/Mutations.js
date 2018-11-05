function mutation(arr) {
    let target = arr[0].toLowerCase();
    let ref = arr[1].toLowerCase();
    for (let i = 0; i < ref.length; i++) {
        if (target.indexOf(ref[i]) < 0) return false;
    }
    return true;
}

mutation(["hello", "hey"]);