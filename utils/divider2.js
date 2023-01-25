let readlineSync = require('readline-sync');
let dividersCount;
do {
	dividersCount = Number(readlineSync.question('Please enter number: '));
} while (isNaN(dividersCount));

let yourLimit 
do { 
	yourLimit = Number(readlineSync.question('Please enter limit: '));
} while (isNaN(yourLimit));

const getDividers = (yourChoice) => {
	const result = [1, yourChoice];
	let choice = yourChoice ** 0.5;
	if (choice === Math.floor(choice)) {
		result.push(choice);
	}
	for (let i = 2; i < choice; i += 1) {
		if (yourChoice % i === 0) {
			result.push(i);
			result.push(yourChoice / i);
		}
	}

	return result;
}

let count = 0;

for (let i = dividersCount; i <= yourLimit; i += 1) {
	let dividers = getDividers(i);
	//console.log(i, dividers.length)
	if (dividers.length === dividersCount) {
		count += 1;
	}
}
console.log(count);