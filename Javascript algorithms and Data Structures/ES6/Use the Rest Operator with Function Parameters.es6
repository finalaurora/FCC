function sum(...args) {
    return args.length>0?args.reduce((a, b) => a + b):0;
  }
console.log(sum(1, 2, 3)); // 6