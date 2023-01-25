let readlineSync = require('readline-sync');
let yourChoice;
do {
   yourChoice =  Number(readlineSync.question('Please enter number: '));
} while (isNaN(yourChoice));


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

console.log(result.sort(( a, b ) => a - b));