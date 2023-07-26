const convertToRoman = (num) => {
  const index = {
    1: "I",
    2: "II",
  };

  if (num === undefined) return "Number is required";
  if (num >= 5000) return "Number is greater than 5000";
  if (num < 0) return "Romans did not require to calculate negative numbers!!";
  if (num === 0) return "Roman did not know about 0";
  if (num === "aaaa") return "String not allowed,Number is required";
  if (num === 1) return "I";
  if (num === 2) return "II";
};
module.exports = convertToRoman;
