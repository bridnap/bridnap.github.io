// As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

// Instructions
// Retrieve the second tree from the variable myPlants using object dot and array bracket notation.

// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
