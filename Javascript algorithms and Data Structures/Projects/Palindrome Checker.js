function palindrome(str) {
    // Good luck!
    var tmpstr;
    var rgex=/[\W_]/gi;
    str=str.toLowerCase();
    str=str.replace(rgex,'');
    tmpstr=str.split('').reverse().join('');
    if(tmpstr===str)return true;
    return false;
  }
  
  
  
  palindrome("not a palindrome");