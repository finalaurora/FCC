function convertToRoman(num) {
    let decimalValue=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let romanNumeral=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var result=[];
    for(let i=0;i<decimalValue.length;i++)
    {
        while(num>=decimalValue[i])
        {
            num-=decimalValue[i];
            result.push(romanNumeral[i]);
        }
    }
 return result.join('');
}

console.log(convertToRoman(1999));