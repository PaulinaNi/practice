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
  return number === 0 ? 0 : digitsArray.reduce((add1, add2) => Number(add1) + Number(add2))
}
// console.log(sumDigits(-126))

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
  for (let i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      errors += 1;
    }
  }
  return `${errors}/${s.length}`
}

// console.log(printerError("hithere"))

/* Task 3
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

function capitalize(s) {
  let case1 = ""
  let case2 = ""
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      case1 += s[i].toUpperCase()
      case2 += s[i].toLowerCase()
    } else {
      case1 += s[i].toLowerCase()
      case2 += s[i].toUpperCase()
    }
  }
  return [case1, case2]
};
// console.log(capitalize("abcdef"))

/* Task 4 
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/
function addBinary(a, b) {
  const sum = a + b
  return sum.toString(2)
}
// console.log(addBinary(2, 6))

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

function digital_root(n) {
  let digitalRootArray = Array.from(String(n)).map(singleNum => Number(singleNum))
  for (let i = 0; digitalRootArray.length > 1; i++) {
    digitalRootArray = Array.from(String(digitalRootArray.reduce((sum, added) => sum + added))).map(singleNum => Number(singleNum))

  }
  return digitalRootArray[0]
}
// console.log(digital_root(456))

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
  return Math.max(...array.map((num, index) => num * array[index + 1]).slice(0, -1))

}
// console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]))

/* Task 7
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
function find_average(array) {
  // sum all elements from array using reduce method and divide by array length
  // use ternary operater to return 0 when empty array
  return array.length === 0 ? 0 : array.reduce((x, y) => x + y) / array.length
}
// console.log(find_average([]))
// console.log(find_average([1, 2, 3, 4]))

/* Task 8
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/
function points(games) {
  let finalScore = 0
  games.map(game => {
    //decide how many points for this game
    if (Number(game[0]) > Number(game[2])) {
      //add point to the final score
      finalScore += 3
    } else if (Number(game[0]) === Number(game[2])) {
      finalScore += 1
    }
  })
  return finalScore
}
// console.log(points(['0:1', '0:2']))
// console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4']))

/* Task 9
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/
const reverseSeq = n => {
  const arr = []
  for (let i = n; i > 0; i--) {
    arr.push(i)
  }
  return arr;
};
// console.log(reverseSeq(5))

/* Task 10 
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/
function solution(nums) {
  return nums === null ? [] : nums.sort((a, b) => a - b)
}

// console.log(solution([2, 20, 10]))

/* Task 11
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

Can you write a solution that will return null for both [] and [ x ] though?
*/
function firstNonConsecutive(arr) {
  const indexOfLastConsecutive = arr.indexOf(arr.find((el, i, arr) => el !== arr[i + 1] - 1))
  return indexOfLastConsecutive !== -1 & indexOfLastConsecutive !== arr.length - 1 & arr.length > 0 ? arr[indexOfLastConsecutive + 1] : null
}
// console.log("firstNonConsecutive", firstNonConsecutive([9, 10, 11, 12, 13, 14, 15, 16, 17, 18]))
// console.log("firstNonConsecutive", firstNonConsecutive([1]))

/* Task 12
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/
function XO(str) {
  //convert to array so you can use array method it
  const strArray = Array.from(str)
  console.log(str)
  console.log(strArray)

  //check if array have x and o
  if (strArray.some(letter => letter === "x" || letter === "X" || letter === "o" || letter === "O")) {
    let xCount = 0
    let oCount = 0
    let otherLettersCount = 0
    //use for loop to count x, o and other letters
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] === "x" || strArray[i] === "X") {
        xCount += 1
      }
      else if (strArray[i] === "o" || strArray[i] === "O") {
        oCount += 1
      } else {
        otherLettersCount += 1
      }
    }
    //compare letter counts and return proper boolean
    if (xCount === oCount && otherLettersCount === 0) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

//shorter version 
//  function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }
// console.log(XO("xXoo"))

/* Task 13
We need a function that can transform a number into a string.

Examples:
123 --> "123"
999 --> "999" 
*/

function numberToString(num) {
  return num.toString()
}

// console.log(numberToString(5))

/* Task 14 
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i)
  }
  return z;
}

// console.log(countBy(2, 5))
