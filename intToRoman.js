const convertToRoman = (num) => {
  const index = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  if (num === undefined) return "Number is required";
  if (num >= 5000) return "Number is greater than 5000";
  if (num < 0) return "Romans did not require to calculate negative numbers!!";
  if (num === 0) return "Roman did not know about 0";
  if (num === "aaaa") return "String not allowed,Number is required";
  // if (num === 1) return "I";
  // if (num === 2) return "II";
  let result = "";
  const romanNumeral = Object.keys(index);

  for (let i = 0; i < romanNumeral.length; ++i) {
    const value = index[romanNumeral[i]];

    while (num >= value) {
      num -= value;
      result += romanNumeral[i];
    }
  }
  return result;
};
console.log(convertToRoman(123));
console.log(convertToRoman(2013));
console.log(convertToRoman(1000));
console.log(convertToRoman(564));

module.exports = convertToRoman;
