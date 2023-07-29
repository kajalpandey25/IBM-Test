// What will the following code's output be in sequence and explain why?
function printNumber(num) {

    console.log(num);
  
  }
  
  
  console.log(1);
  
  
  setTimeout(printNumber, 0, 2);
  
  
  setTimeout(printNumber, 100, 3);
  
  
  console.log(4);

//   The output sequence of the given code will be as follows:

// 1
// 4
// 2
// 3

// That's why the final output sequence will be 1, 4, 2, 3. The setTimeout with a delay of 0 milliseconds does not guarantee immediate execution, as it depends on the event loop's state and other factors. It will still be placed in the event queue and executed after the synchronous code has finished executing. The setTimeout with a delay of 100 milliseconds will execute after the specified delay has passed.
