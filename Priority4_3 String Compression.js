/*
String Compression
You are given a string containing only uppercase letters. Your task is to implement a function called compressString that compresses the string by counting the consecutive occurrences of each letter and returning a new compressed string.

The compressed string should consist of each letter followed by its count. If a letter appears only once consecutively, you should include the count.

Example: 
compressString("AAAABBBCCDAA"); // should return "A4B3C2D1A2"
compressString("XYZ"); // should return "X1Y1Z1"

 */

const stringCompression = (string) => {
  if (string.length === 0) return "";

  let results = "";
  let counter = 0;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      counter++;
    } else {
      results += string[i - 1] + counter;
      counter = 1;
    }
  }
  results += string[string.length - 1] + counter;
  return results;
};

console.log(stringCompression("AAAABBBCCDAA"));
console.log(stringCompression("XYZ"));
