//  What is callback hell? Explain different ways to solve callback hell with examples each.

// Callback hell, also known as the pyramid of doom, is a common issue that arises when dealing with multiple nested callbacks in asynchronous JavaScript code. It occurs when you have several asynchronous operations that depend on the results of each other, leading to deeply nested callbacks. This can make the code hard to read, maintain, and debug, as the indentation levels increase and the flow of execution becomes less apparent.

// Here's an example of callback hell:
asyncOperation1(function (result1) {
    asyncOperation2(result1, function (result2) {
      asyncOperation3(result2, function (result3) {
        // ... and so on
      });
    });
  });

  
//   To solve callback hell, there are several techniques available in modern JavaScript:

// 1. Using Promises:
// Promises provide a cleaner and more structured way to handle asynchronous operations. Instead of nesting callbacks, you can chain promises using then() and catch() methods.

asyncOperation1()
  .then((result1) => asyncOperation2(result1))
  .then((result2) => asyncOperation3(result2))
  .then((result3) => {
    // ... and so on
  })
  .catch((error) => {
    // Handle errors
  });


//   2. Using Async/Await:
// Async/await is a syntactical feature in ES2017 (ES8) that makes asynchronous code look more synchronous, making it easier to understand and maintain. It relies on Promises under the hood.

async function myAsyncFunction() {
    try {
      const result1 = await asyncOperation1();
      const result2 = await asyncOperation2(result1);
      const result3 = await asyncOperation3(result2);
      // ... and so on
    } catch (error) {
      // Handle errors
    }
  }

  
//   3. Using Async.js Library:
// The Async.js library provides a powerful set of functions to manage asynchronous operations. It allows you to run tasks in parallel, series, or other customized flows without the need for deeply nested callbacks

const async = require('async');

async.series([
  (callback) => asyncOperation1(callback),
  (callback) => asyncOperation2(callback),
  (callback) => asyncOperation3(callback),
  // ... and so on
], (error, results) => {
  if (error) {
    // Handle errors
  } else {
    // Access the results
    const [result1, result2, result3] = results;
  }
});
