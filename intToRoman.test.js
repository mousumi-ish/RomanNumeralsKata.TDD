const convertToRoman = require("./intToRoman");

test("no input gives an empty string", () => {
  expect(convertToRoman()).toBe("Number not entered");
});
