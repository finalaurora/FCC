function dropElements(arr, func) {
    // Drop them elements.
    let times=arr.length;
    for (let i = 0; i < times; i++) {
      if (func(arr[0])) {
        break;
      }
      else {
        arr.shift();
      }
    }
    console.log(arr);
    return arr;
  }
  
  
  dropElements([1, 2, 3, 4], function(n) {return n > 5;})