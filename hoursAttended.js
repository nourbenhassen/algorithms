function hoursAttended (attended, length) {
  
  return (Number(attended) <= Number(length) && isStrOrNb(attended, length) && zeroOrHigher(attended, length) && isWholeNumber(attended, length) && attended !== "" && length !== "");
    
    function isWholeNumber (var1, var2) {
      if(Number(var1) === Math.round(Number(var1)) && Number(var2) === Math.round(Number(var2)))
       return true;
     else return false;
    }
    
   function zeroOrHigher (var1, var2) {
     if(Number(var1) >= 0 && Number(var2) >= 0)
       return true;
     else return false;
   } 
  
  function isStrOrNb (var1, var2) {
    if ((var1 === String(var1) || var1 === Number(var1)) && (var2 === String(var2) || var2 === Number(var2)))
      return true;
    else return false;
  }
}

console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
