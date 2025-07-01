/*Priority 2 - useful, if you have time
Remove Duplicate
How would you remove duplicate members from an array without Set?

*/
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
const input = [1, 2, 2, 3, 4, 4, 5, 1, 6, 3, 7];
const expectedOutput = [1, 2, 3, 4, 5, 6, 7];

// Your function should take `input` and return a new array equal to `expectedOutput`
console.log(removeDuplicates(input)); // should log: [1, 2, 3, 4, 5, 6, 7]
