// (in-class assignment).

// (part 1)
// 1. create a function called divideFunction that returns a quotient.
// 2. import and test it on app.js.

export let divideFunction = function(a, b) {
  if (b == 0) {
    return "Cannot divide by zero.";
  } else {
    return "divide function: " + a / b;
  }
};

// (part 2)
// 3. recreate the above as a class.
// 4. import and test it on app.js.

export class divideFunctionClass {
  divide(a, b) {
    if (b == 0) {
      return "Cannot divide by zero.";
    } else {
      return "divide function class: " + a / b;
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////

// //export default can export a single function without brackets.
// let multiplyFunction = function(a, b) {
//   return a * b;
// };

// let sumFunction = function(a, b) {
//   return a + b;
// };

// export default sumFunction;
