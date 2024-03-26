//Exercise 1: Roman to Integer

function romanToInt(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let number = roman[s[i]];
    console.log(number);
    let nextNumber = roman[s[i + 1]];
    console.log(nextNumber);
    if (number > nextNumber) {
      sum += number;
    } else if (number < nextNumber) {
      sum -= number;
    } else {
      sum += number;
    }
  }
  console.log(sum);
  return sum;
}

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994
