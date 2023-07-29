// What is promise chaining? Explain with an example.

// Promise chaining is a technique in JavaScript used to handle asynchronous operations sequentially by chaining multiple promises together. It allows you to perform a series of asynchronous tasks in a more readable and organized manner. Instead of nesting multiple callbacks (known as the "callback hell"), promise chaining provides a cleaner and more maintainable code structure.

// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and provide a way to handle the result or error asynchronously. They have two primary methods: then() and catch(). The then() method is used to handle the successful completion of a promise, while the catch() method is used to handle any errors that might occur during the promise's execution.

// Here's an example of promise chaining:


// Function that returns a promise to simulate an asynchronous operation
function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = { id: 1, name: "John Doe", age: 30 };
        // Simulate a successful API call by resolving the promise with userData
        resolve(userData);
        // Simulate an error by rejecting the promise
        // reject(new Error("Failed to fetch user data"));
      }, 2000); // Simulate a delay of 2 seconds
    });
  }
  
  function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const posts = [
          { id: 101, userId: userId, title: "Post 1" },
          { id: 102, userId: userId, title: "Post 2" },
        ];
        // Simulate a successful API call by resolving the promise with posts
        resolve(posts);
        // Simulate an error by rejecting the promise
        // reject(new Error("Failed to fetch user posts"));
      }, 1500); // Simulate a delay of 1.5 seconds
    });
  }
  
  // Promise chaining example
  fetchUserData()
    .then((userData) => {
      console.log("User data:", userData);
      return fetchUserPosts(userData.id);
    })
    .then((userPosts) => {
      console.log("User posts:", userPosts);
      // You can continue chaining more promises here...
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  

  // n this example, we have two functions, fetchUserData and fetchUserPosts, which return promises simulating API calls with a delay. We use promise chaining to call these functions one after the other.