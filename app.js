/* Task 1
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
 //convert number to an array
 const digitsArray = Array.from(String(Math.abs(number)))
   
 //return sum of absolute values(sum array by reduce method)
 return number===0? 0 : digitsArray.reduce((add1,add2)=> Number(add1)+Number(add2))
}
console.log(sumDigits(-126))

/* Task 2
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/
function printerError(s) {
 let errors = 0
 for(let i = 0; i< s.length; i++){
  if (s[i] > "m") {
   errors +=1;
 }
 }
 return `${errors}/${s.length}`
}

console.log(printerError("hithere"))