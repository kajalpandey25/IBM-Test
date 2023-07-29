// Explain the output of the above-given code and explain why?

for (var i = 0; i < 5; i++) {

  setTimeout(() => console.log(i), 100)

}
// Let's go through the execution step by step:

// The loop starts with i = 0. The first setTimeout is set up, and it will log the value of i (which is 0) after 100 milliseconds.
// The loop continues, and i becomes 1. The second setTimeout is set up with the same callback function that logs the value of i.
// The loop continues like this until i reaches 4, and a total of five setTimeout functions are set up, all using the same callback function.
// After 100 milliseconds, the first callback function is executed, and it logs the current value of i, which is 5 (the loop has already finished, and i is the last value it held). Consequently, when the remaining four setTimeout functions are executed, they also log the value 5, as there's only one shared i variable with a value of 5 at that point.

// So, the output will be:

// 5
// 5
// 5
// 5
// 5
