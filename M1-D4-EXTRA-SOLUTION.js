// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let array = [1, 2, 3, 4, 5];
// [ 1,2,3,4,5 ] => Swap 0 and 4
// [ 5,2,3,4,1 ] => Swap 1 and 3 -> i+i, lenght - i - 1
// [ 5,4,3,2,1 ]
for (let i = 0; i < array.length / 2; i++) {
  let temp = array[i]; // Save variable for later
  array[i] = array[array.length - i - 1]; // replace the last with the first, then the second with the...
  array[array.length - i - 1] = temp;
}

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

let maxArray = [1, 2, 10, 20, 50, 0, 5, 2];
// take the first element
let maxValue = maxArray[0];
for (let i = 1; i < maxArray.length; i++) {
  if (maxArray[i] > maxValue) maxValue = maxArray[i];
}

console.log("The maximum is: ", maxValue);
// if the second is greater than the first, I have a new max
// else, i'll continue with the third one
// until I reach the end of the array

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

let minArray = [1, 2, 10, 20, 50, 0, 5, 2];
// take the first element
let minValue = minArray[0];
for (let i = 1; i < minArray.length; i++) {
  if (minArray[i] < minValue) minValue = minArray[i];
}

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let evenNumbers = [
  1,
  5,
  2,
  3,
  "cat",
  "whatever",
  {
    name: "Test",
  },
];

let acc = [];

for (let i = 0; i < evenNumbers.length; i++) {
  if (typeof evenNumbers[i] === "number" && evenNumbers[i] % 2 === 0) {
    acc.push(evenNumbers[i]);
  }
}

console.log(acc);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

let evenNumbers2 = [
  1,
  5,
  2,
  3,
  "cat",
  "whatever",
  {
    name: "Test",
  },
];

for (let i = 0; i < evenNumbers2.length; i++) {
  if (typeof evenNumbers2[i] === "number" && evenNumbers2[i] % 2 === 1) {
    evenNumbers2.splice(i, 1);
    i--; // i = i -1
  }
}

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let str = "Strive School makes you a developer!";
let result = "";
for (let i = 0; i < str.length; i++) {
  switch (str[i]) {
    case "a":
    case "e":
    case "i":
    case "u":
    case "o":
      break;
    default:
      result += str[i];
  }
}

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let toBeIncreased = [1, 5, 10, "cat", "bob", true, 10];

for (let i = 0; i < toBeIncreased.length; i++) {
  if (typeof toBeIncreased[i] === "number") toBeIncreased[i]++;
}

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let advert = ["strive", "is", "great"];
for (let i = 0; i < advert.length; i++) {
  advert[i] = advert[i].length;
}

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
