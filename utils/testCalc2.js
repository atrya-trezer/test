import { mathematics } from './functions.js';

console.log(process);

const firstNumber = Number(process.argv[2]);
const actionVariants = ['+', '-', '*', '/', '^'];
const action = process.argv[3];
const secondNumber = Number(process.argv[4]);
if (Number.isNaN(firstNumber)) {
  console.error('first number is not number')
  process.exit(1);
}
if (actionVariants.includes(action) === false) {
  console.error('action is not action')
  process.exit(1);
}
if (Number.isNaN(secondNumber)) {
  console.error('second number is not number')
  process.exit(1);
} else {
  console.log(mathematics(firstNumber, action, secondNumber));
}
