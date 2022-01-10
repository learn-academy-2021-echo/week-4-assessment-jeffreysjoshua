// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("shuffled", () => {

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
  // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

  it("takes an array of strings, removes index 0, and shuffles the rest", () => {

  // set expect statement to equal the array, with index 0 deleted, and the rest shuffled.
    expect(["blue", "green", "yellow", "pink", "new"]).toEqual(expect.arrayContaining(shuffled(colors1)))
    expect(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]).toEqual(expect.arrayContaining(shuffled(colors2)))

  })
})


// b) Create the function that makes the test pass.

// create function called shuffled
const shuffled = (array) => {
// use .shift() method to remove index 0
  array.shift()
// use .sort() method to shuffle the rest of the array, and return the array.
return array.sort((a, b) => 0.5 - Math.random())
}
// Note: function produces green "passed" message. Function refactored, as needed.



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("minmax", () => {

  var nums1 = [3, 56, 90, -8, 0, 23, 6]
  // Expected output: [-8, 90]
  var nums2 = [109, 5, 9, 67, 8, 24]
  // Expected output: [5, 109]

    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {

      // set expect statement to equal an array with the lowest and highest number of the input array
      expect(minmax(nums1)).toEqual([-8, 90])
      expect(minmax(nums2)).toEqual([5, 109])

    })
  })


// b) Create the function that makes the test pass.

// create a function called minmax
const minmax = (array) => {
// create an empty return array
  let newArray = []
// push the min and max values into the return array
  newArray.push(Math.min(... array))
  newArray.push(Math.max(... array))
// return the return array
  return newArray
}
// Note: function produces green "passed" message. Function refactored, as needed.



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("noDups", () => {
  var testArray1 = [3, 7, 10, 5, 4, 3, 3]
  var testArray2 = [7, 8, 2, 3, 1, 5, 4]
  // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {

      // set expect statement to equal a concated array with no dubplicate values
      expect(noDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])

    })
  })



// b) Create the function that makes the test pass.

// create a function called noDups
const noDups = (array1, array2) => {
// create new array and concat the two input arrays
  let array3 = array1.concat(array2)
// create return variable and use Set() method to remove duplicate values
  let finalArray = [...new Set(array3)];
  return finalArray
  }
  // Note: function produces green "passed" message. Function refactored, as needed. Could not figure out how to concat a dynamic amount of arrays for the stretch :/
