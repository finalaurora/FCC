function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var currency = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];
    var output = {
        status: "",
        change: []
    }
    var register = cid.reduce((reg, curVal, curIndex) => {
        reg.total += curVal[1];
        reg[curVal[0]] = curVal[1];
        return reg;
    }, {
        total: 0
    })

    if (change == register.total) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }
    if (change > register.total) {
        output.status = "INSUFFICIENT_FUNDS";
        output.change = [];
        return output;
    }
    var changeArr = [];
    var amount;
    for (let i = currency.length - 1; i >= 0; i--) {
        amount = 0;
        while (change >= currency[i][1] && cid[i][1] > 0) {
            change -= currency[i][1];
            amount += currency[i][1];
            cid[i][1] -= currency[i][1];
            change = Math.round(change * 100) / 100;
        }
        if (amount > 0)
            changeArr.push([currency[i][0], amount]);
    }
    if (changeArr.length < 1 || change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        output.change = [];
    } else {
        output.status = "OPEN";
        output.change = changeArr;
    }
    console.log(changeArr);
    // Here is your change, ma'am.
    return output;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]));