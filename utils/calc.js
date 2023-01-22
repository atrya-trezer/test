//
// код должен делать следующее: 
// последовательно просить пользователя "Please enter first number: ", "Please enter action (+, -, *, /, ^): ", "Please enter second number: "
// выполнять соответствующее арифметическое действие, выводить результат и на этом заканчивать работу
let readlineSync = require('readline-sync');
const mathematics = (firstNumber, action, secondNumber) => {
	let result = 0;
	if (action === '+') {
		result = firstNumber + secondNumber;
	}
	else if (action === '-') {
		result = firstNumber - secondNumber;
	}
	else if (action === '*') {
		result = firstNumber * secondNumber;
	}
	else if (action === '/') {
		result = firstNumber / secondNumber;
	}
	else if (action === '^') {
		result = firstNumber ** secondNumber;
	}
	return result;
}

do {
	let firstNumber, action, secondNumber;

	do {
		firstNumber = Number(readlineSync.question('Please enter first number: '));
//	console.log(firstNumber, firstNumber === NaN);
	} while (isNaN(firstNumber));

	const actionVariants = ['+', '-', '*', '/', '^'];

	do {
		action = readlineSync.question('Please enter action (+, -, *, /, ^): ');
	} while (actionVariants.includes(action) === false);

	do {
		secondNumber = Number(readlineSync.question('Please enter second number: '));
	} while (isNaN(secondNumber));

	console.log(mathematics(firstNumber, action, secondNumber));
} while (!readlineSync.keyIn('Count more? (y/n) ', {falseValue: ['y']}));