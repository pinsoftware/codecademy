let _ = {

    clamp: function (number, lower, upper) {
      if (number < lower){
        return lower;
      }else if (number > upper){
        return upper;
      }
      return number;
    },
   
    inRange: function (number, start, end){
      if (typeof end === 'undefined'){
        end = start;
        start = 0;
      }
      if (start > end){
        end = [start, start = end][0];
      }
      if (number >= start && number < end){
        return true;
      } else return false;
      
    } ,
    
    words: function (string, splitter){
      if (typeof splitter === 'undefined'){
        splitter = ' ';
      }
      return string.split(splitter);
    } ,
    
    pad: function (str, length){
      if (str.length >= length){
        return str;
      }
      leftPad = Math.floor((length - str.length)/2);
      rightPad = Math.ceil((length - str.length)/2);
          return ' '.repeat(leftPad) + str + ' '.repeat(rightPad);
    } ,
    
    has: function (obj, key){
      return (obj[key] != undefined)
    } ,
    
    invert: function (){
      
    } ,
    
    findKey: function (){
      
    } ,
    
    drop: function (){
      
    } ,
    
    dropWhile: function (){
      
    } ,
    
    chunk: function (){
      
    } ,
  }
  // Do not write or modify code below this line.
  module.exports = _;