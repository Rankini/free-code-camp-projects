/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
function convertToRoman(num) {
  //define roman numeral system codex
  const RM_CODEX = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];

  if (num === 0) {
    return "";
  }
  for (var i = 0; i < RM_CODEX.length; i++) {
    if (num >= RM_CODEX[i][0]) {
      return RM_CODEX[i][1] + convertToRoman(num - RM_CODEX[i][0]);
    }
  }
}

console.log(convertToRoman(2034));