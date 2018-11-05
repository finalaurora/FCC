function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.concat(arr2).forEach(function(item){
      if(arr2.indexOf(item)==-1||arr1.indexOf(item)==-1){
        newArr.push(item);
      }
    })
    // Same, same; but different.
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);