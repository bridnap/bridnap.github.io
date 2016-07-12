###Reverse A String

#####Reverse the provided string.
#####You may need to turn the string into an array before you can reverse it.
#####Your result must be a string.

``` javascript
function reverseString(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}

reverseString("hello");
```

#####OR

```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");
```

