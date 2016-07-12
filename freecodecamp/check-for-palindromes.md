```javascript
function palindrome(str) {
  // Good luck!
  
var str1 = str;

function upperToHyphenLower(match) {

  return '' + match.toLowerCase();
 }
  
    str = str.replace(/[A-Z]/g, upperToHyphenLower);
  
    str1 = str.split("").reverse().join("");
  
  if (str1 == str) {
    return "true";
  }
  
  else return "false";

}

palindrome("eye");
```
