/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase()
  let revStr = []
  let newStr = ""
  for (let i of str) {
    if (i > 'a' && i < 'z' || i > 'A' && i < 'Z') {
      revStr.unshift(i);
      newStr += i
    }
  }
  revStr = revStr.join("");
  console.log(revStr)
  if (newStr === revStr)
    return true
  else
    return false
}

module.exports = isPalindrome;
