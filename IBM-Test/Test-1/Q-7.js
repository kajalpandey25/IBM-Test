// . Use Array.reduce() method to reverse the following given array

// const arr = [1, 2, 3, 4, 5]
// To reverse the given array using the Array.reduce() method, you can use the following code:
const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((accumulator, currentValue) => {
  return [currentValue, ...accumulator];
}, []);

console.log(reversedArr); // Output: [5, 4, 3, 2, 1]

// Explanation:

// We start with an initial empty array as the accumulator in the reduce() method: [].
// In each iteration, the current element of the original array (currentValue) is prepended to the accumulator array using the spread operator (...).
// The updated accumulator is returned and becomes the new accumulator for the next iteration.
// The process continues until all elements of the original array are processed, resulting in a reversed array.

