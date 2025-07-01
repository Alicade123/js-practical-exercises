/*Phone Number Validator
Description: Create a function called validatePhoneNumber that takes a string as input and returns true if the string represents a valid phone number and false otherwise.

A valid phone number must satisfy the following conditions:
It must be exactly 10 digits long (no more, no less).
It can optionally include hyphens - or spaces at specific positions: after the 3rd digit and after the 6th digit.

Example:
validatePhoneNumber("1234567890"); // should return true
validatePhoneNumber("123-456-7890"); // should return true
validatePhoneNumber("123 456 7890"); // should return true
validatePhoneNumber("123-45-67890"); // should return false
validatePhoneNumber("1234-567890"); // should return false
*/

const validatePhoneNumber = (string) => {
  const regex = /^(\d{10}|(\d{3}[- ]\d{3}[- ]\d{4}))$/;
  return regex.test(string);
};
console.log(validatePhoneNumber("1234567890"));
console.log(validatePhoneNumber("123-456-7890"));
console.log(validatePhoneNumber("123 456 7890"));
console.log(validatePhoneNumber("123-45-67890"));
console.log(validatePhoneNumber("1234-567890"));
