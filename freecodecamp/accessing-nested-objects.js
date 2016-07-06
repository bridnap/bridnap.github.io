// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

// Instructions
// Access the myStorage object to retrieve the contents of the glove box. Use bracket notation for properties with a space in their name.

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
