/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();
    let c=0;
    for (let i of str){
      if(['a', 'e', 'i','o','u'].indexOf(i) != -1){
          c++;
      }
    }
    return c;
}

module.exports = countVowels;