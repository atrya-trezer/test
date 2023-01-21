//
// код должен делать следующее: 
// последовательно просить пользователя "Please enter first number: ", "Please enter action (+, -, *, /, ^): ", "Please enter second number: "
// выполнять соответствующее арифметическое действие, выводить результат и на этом заканчивать работу
var readlineSync = require('readline-sync');
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


var firstNumber = Number(readlineSync.question('Please enter first number: '));
var action = readlineSync.question('Please enter action (+, -, *, /, ^): ');
var secondNumber = Number(readlineSync.question('Please enter second number: '));
console.log(mathematics(firstNumber, action, secondNumber));
