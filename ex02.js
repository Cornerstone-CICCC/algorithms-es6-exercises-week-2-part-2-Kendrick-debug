// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

const numbers = [5, 6, 24, 74, 11, 90, 38];
const numGreaterThanTen = numbers.find((element) => {
  return element > 10;
});

console.log(numGreaterThanTen);
