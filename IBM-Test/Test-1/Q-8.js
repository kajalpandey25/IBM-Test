//  In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

(function() {

    console.log(1); 

    setTimeout(function(){console.log(2)}, 1000); 

    setTimeout(function(){console.log(3)}, 0); 

    console.log(4);

})();

// The numbers 1, 4, 3, and 2 will be logged to the console in the following order:

// 1: The first console.log(1) statement is executed synchronously, so the number 1 is logged to the console first.

// 4: The second console.log(4) statement is also executed synchronously, immediately after the first one, so the number 4 is logged to the console next.

// 3: The setTimeout function with a delay of 0 milliseconds is scheduled to execute its callback function asynchronously. However, even though the delay is set to 0 milliseconds, it will still be placed in the event queue after the synchronous code has finished executing. This means that the console.log(3) statement will be logged to the console after the synchronous code (console.log(1) and console.log(4)) is executed. So, the number 3 is logged to the console after 1 and 4.

// 2: The setTimeout function with a delay of 1000 milliseconds is scheduled to execute its callback function after a delay of 1 second. Since the code inside the setTimeout functions is non-blocking, the program continues to execute other statements while waiting for the specified delay. After approximately 1 second, the callback function with console.log(2) is executed, and the number 2 is logged to the console.

// So, the final order of numbers logged to the console will be: 1, 4, 3, 2.





