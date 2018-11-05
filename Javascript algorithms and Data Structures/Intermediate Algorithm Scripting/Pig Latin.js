function translatePigLatin(str) {
    let result = str.match(/^[^aeiou]+/);
    if (str.match(/^[aeiou].*/) !== null) {
      return str.concat("way");
    } else {
      result = str.slice(result[0].length).concat(result[0]).concat("ay");
      return result;
    }
  }
  
  console.log(translatePigLatin("ee"));///[^aeiou]+/