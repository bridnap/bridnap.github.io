####Instructions
#####Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

``` javascript
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
```
