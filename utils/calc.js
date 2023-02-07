const readlineSync = require('readline-sync');

const mathematics = (firstNumber, action, secondNumber) => {
  let result = 0;
  if (action === '+') {
    result = firstNumber + secondNumber;
  } else if (action === '-') {
    result = firstNumber - secondNumber;
  } else if (action === '*') {
    result = firstNumber * secondNumber;
  } else if (action === '/') {
    result = firstNumber / secondNumber;
  } else if (action === '^') {
    result = firstNumber ** secondNumber;
  }
  return result;
};

do {
  let firstNumber; let action; let
    secondNumber;

  do {
    firstNumber = Number(readlineSync.question('Please enter first number: '));
  } while (Number.isNaN(firstNumber));

  const actionVariants = ['+', '-', '*', '/', '^'];

  do {
    action = readlineSync.question('Please enter action (+, -, *, /, ^): ');
  } while (actionVariants.includes(action) === false);

  do {
    secondNumber = Number(readlineSync.question('Please enter second number: '));
  } while (Number.isNaN(secondNumber));

  console.log(mathematics(firstNumber, action, secondNumber));
} while (!readlineSync.keyIn('Count more? (y/n) ', { falseValue: ['y'] }));
