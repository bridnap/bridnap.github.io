###Factorialize A Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

```javascript
function factorialize(num) {
  var i = 1;
  var j;
  for (j = num; j > 1; j--) {
   i *= j;
 }
  return i;
}

factorialize(5);
```
