// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const numbers = [48, 3, 9, 5, 91, 31, 74];
const isEveryNumPositive = numbers.every((number) => {
  return number > 0;
});

if (isEveryNumPositive) {
  console.log("Every number is positive");
} else {
  console.log("Not all the nnumbers are positive");
}
