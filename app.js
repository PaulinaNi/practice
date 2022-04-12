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