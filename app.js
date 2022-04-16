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

/* Task 3
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

function capitalize(s){
  let case1 = ""
  let case2 = ""
  for(let i = 0; i < s.length; i++){
    if(i%2 === 0){
      case1 += s[i].toUpperCase()
      case2 += s[i].toLowerCase()
    } else{
      case1 += s[i].toLowerCase()
      case2 += s[i].toUpperCase()
    }
  } 
  return [case1,case2]
};
console.log(capitalize("abcdef"))

/* Task 4 
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/
function addBinary(a,b) {
  const sum = a+b
return sum.toString(2)
}
console.log(addBinary(2,6))

/* Task 5
https://www.codewars.com/kata/541c8630095125aba6000c00

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
 16  -->  1 + 6 = 7
  942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digital_root(n){
  let digitalRootArray = Array.from(String(n)).map(singleNum =>Number(singleNum))
  for(let i = 0; digitalRootArray.length > 1; i++ ){
    digitalRootArray = Array.from(String(digitalRootArray.reduce((sum, added)=> sum+added))).map(singleNum =>Number(singleNum))
    
  }
  return digitalRootArray[0]
}
console.log(digital_root(456))

/* Task 6
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
*/

function adjacentElementsProduct(array) {
  // const multiplyingArray = []
  // for (let i = 0; i < array.length-1; i++){
  //   multiplyingArray.push(array[i]*array[i+1])
  // }
  // return Math.max(...multiplyingArray)
  return Math.max(...array.map((num, index)=> num * array[index+1]).slice(0,-1))

}
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]))

