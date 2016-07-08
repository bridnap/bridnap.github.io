####Instructions
#####Use the \d selector to select the number of numbers in the string, allowing for the possibility of one or more digit.

``` javascript
// Setup
var testString = "There are 3 cats but 4 dogs.";

// Only change code below this line.

var expression = /\d+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;
```
