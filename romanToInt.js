function romanToInt (roman) {

  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var result = 0;
  var input = roman.split('');

  for (let i = 0; i < input.length; i++) {

      if (values[input[i]] < values[input[i + 1]]) {
        result += values[input[i + 1]] - values[input[i]];
        i++;
      } else {
        result += values[input[i]];
      }
    }

  return result;
}

console.log(romanToInt("IX")); //9
console.log(romanToInt("XXXIV")); //34
console.log(romanToInt("MCDXXIII")); //1423
