let readlineSync = require('readline-sync');
let yourChoice;
do {
	yourChoice = Number(readlineSync.question('Please enter number: '));
} while (isNaN(yourChoice));

let result = {};
result[2] = true;
for (let i = 1; i <= yourChoice; i += 2){
	result[i] = true;
}

let p = 3;
while (true) {
	for (let i = 2 * p; i <= yourChoice; i += p) {
		result[i] = false;
 	}

 	let new_p = false;

 	for ( let i = p + 2; i <= yourChoice; i += 2) {
 		if (result[i]) {
 			new_p = i;
 			break;
 		}
 	}

 	if (new_p) {
 		p = new_p;
 	} else {
 		break;
 	}
}

console.log('primes:')
for (let number in result){
	if (result[number]) {
		console.log(number);
	}
}
