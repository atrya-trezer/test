let readlineSync = require('readline-sync');
do {
	yourChoice = Number(readlineSync.question('Please enter number: '));
} while (isNaN(yourChoice));

const getDividers = (num) => {
	const result = [num];
	let choice = num ** 0.5;
	if (choice === Math.floor(choice)) {
		result.push(choice);
	}
	for (let i = 2; i < choice; i += 1) {
		if (num % i === 0) {
			result.push(i);
			result.push(num / i);
		}
	}

	return result.sort(( a, b ) => a - b);
}

const checkForCommonDividers = (array1, array2) => {
	for (let p = 0; p < array1.length; p += 1) {
		for (let j = 0; j < array2.length; j += 1) {
			if (array1[p] === array2[j]){
				return true;
			}
		}
	}
	return false;
}

const yourChoiceDividers = getDividers(yourChoice);

let result = 0;
for (let i = 1; i < yourChoice; i += 1) {
	const iDividers = getDividers(i);
	if (!checkForCommonDividers(yourChoiceDividers, iDividers)) {
		result += 1;
	}
}
console.log (result)