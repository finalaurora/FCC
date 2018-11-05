function filteredArray(arr, elem) {
    let newArr = [...arr];
    // change code below this line
    let j=0;
    for (let i=0;i<arr.length;i++)
    {
      if(newArr[j].indexOf(elem)>=0)
      {
        newArr.splice(j,1);
      }
      else 
      {
        j++;
      }
    }
  
    // change code above this line
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));