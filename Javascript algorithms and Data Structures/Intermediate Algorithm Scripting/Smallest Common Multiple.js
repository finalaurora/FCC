function gcd(a, b) {
    let temp;
    if (a >= b) {
        while (b != 0) {
            temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    } else {
        while (a != 0) {
            temp = b % a;
            b = a;
            a = temp;
        }
        return b;
    }
}

function smallestCommons(arr) {
    let range = [];
    let result;
    for (let i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
        range.push(i);
    }
    result = range[0];
    range.forEach((item) => {
        result = (result * item) / gcd(result, item);
    })
    return result;
}

smallestCommons([1, 5]);