import { mathematics, divider, numberDividers, eratosfen, euler } from './functions.js';
import * as readlineSync from 'readline-sync';
do {
	let firstNumber, action, secondNumber;

	do {
		firstNumber = Number(readlineSync.question('Please enter first number: '));

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