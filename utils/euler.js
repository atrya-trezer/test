let readlineSync = require('readline-sync');
do {
	yourChoice = Number(readlineSync.question('Please enter number: '));
} while (isNaN(yourChoice));

function getCommonElements(array1, array2) {
	const array = [];
 		for (let i = 0; i < array1.length; i += 1) {
		for (let j = 0; j < array2.length; j += 1) {
    		if (array1[i] === array2[j]){
      			array.push(i);
			}
		}
	}
	return array;
}

const resultDivider = [1, yourChoice];
let choice = yourChoice ** 0.5;
if (choice === Math.floor(choice)) {
	resultDivider.push(choice);
}
for (let i = 2; i < choice; i += 1) {
	if (yourChoice % i === 0) {
		resultDivider.push(i);
		resultDivider.push(yourChoice / i);
	}
}

const result = []
for (let i = 1; i < yourChoice; i += 1) {
	const resultDividerI = [1, i];
	let choiceI = i ** 0.5;
	if (choiceI === Math.floor(choiceI)) {
		resultDividerI.push(choiceI);
	}
	for (let t = 2; t < choiceI; t += 1) {
		if (i % t === 0) {
			resultDividerI.push(t);
			resultDividerI.push(i / t);
		}
	}
	if (getCommonElements(resultDivider, resultDividerI) === [1, yourChoice]) {
		result.push(i)
	}
}
console.log (result.length)