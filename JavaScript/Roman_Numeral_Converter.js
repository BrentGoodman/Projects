//This is an assignment for my freeCodeCamp JavaScript Certificate

function convertToRoman(num) {
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman   = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let result = '';
    numbers.forEach(function(number, i) {
      while (num >= number) {
        result += roman[i];
        num -= number
      }
    })
     return result;
    }
    
    console.log("1112 in Roman Numerals =", convertToRoman(1112));
    console.log("400 in Roman Numerals =", convertToRoman(400));
    console.log("2014 in Roman Numerals =", convertToRoman(2014));
    console.log("3999 in Roman Numerals =", convertToRoman(3999));
    console.log("891 in Roman Numerals =", convertToRoman(891));
    console.log("798 in Roman Numerals =", convertToRoman(798));
    console.log("1234 in Roman Numerals =", convertToRoman(1234));