function addTogether() {
    let arg1;
    let arg2;
    var checkNum = function (num) {
        if (typeof num !== 'number') {
            return undefined;
        } else
            return num;
    };

    if (arguments.length > 1) {
        arg1 = checkNum(arguments[0]);
        arg2 = checkNum(arguments[1]);
        if (arg1 == undefined || arg2 == undefined) {
            return undefined;
        } else {
            return arguments[0] + arguments[1];
        }
    } else {
        let para = arguments[0];
        if (checkNum(para)) {
            return function (arg2) {
                if (para == undefined || checkNum(arg2) == undefined) {
                    return undefined;
                } else {
                    return para + arg2;
                }
            }
        }
    }
}

addTogether(2, 3);