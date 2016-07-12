####Check for Palindromes

Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
#####Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

```javascript
function palindrome(str) {
  // Good luck!

var str1 = str;
function upperToHyphenLower(match) {

  return '' + match.toLowerCase();
 }

    str = str.replace(/[A-Z]/g, upperToHyphenLower);
    str = str.replace(/_/g, "");
    str = str.replace(/ /g, "");
    str = str.replace(/,/g, "");
    str = str.replace(/-/g, "");
    str = str.replace(/:/g, "");
    str = str.replace(/\\/g, "");
    str = str.replace(/\//g, "");
    str = str.replace(/\)/g, "");
    str = str.replace(/\./g, "");  
  
    str1 = str.split("").reverse().join("");

  if (str1 == str) {
    return true;
  }

  else return false;

}

palindrome("eye");
```
