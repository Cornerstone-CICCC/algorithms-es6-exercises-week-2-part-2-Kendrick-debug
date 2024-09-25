// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [11, 77, 9, 5, 83, 41, 54];
const isThereAnEvenNumber = numbers.some((numbers) => {
  return numbers % 2 === 0;
});

if (isThereAnEvenNumber) {
  console.log("Some of the numbers are even");
} else {
  console.log("Non of the numbers are even");
}
