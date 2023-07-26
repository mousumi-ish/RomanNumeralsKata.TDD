const convertToRoman = require("./intToRoman");

test("no input gives an empty string", () => {
  expect(convertToRoman()).toBe("Number is required");
});
test("String not allowed", () => {
  expect(convertToRoman("aaaa")).toBe("String not allowed,Number is required");
});
test("0 gives an  string", () => {
  expect(convertToRoman(0)).toBe("Roman did not know about 0");
});
test("will return error if the number is greater than 2999", () => {
  expect(convertToRoman(10870)).toBe("Number is greater than 5000");
});
test("1 convert to I", () => {
  expect(convertToRoman(1)).toBe("I");
});
test("2 convert to I", () => {
  expect(convertToRoman(2)).toBe("II");
});

