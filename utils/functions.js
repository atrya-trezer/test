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

const divider = (yourChoice) => {
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
    return result.sort(( a, b ) => a - b);
}

const numberDividers = (dividersCount, yourLimit) => {
    let count = 0;

    for (let i = dividersCount; i <= yourLimit; i += 1) {
	    let dividers = dividers(i);
	    if (dividers.length === dividersCount) {
	    	count += 1;
	    }
    }
    return count;
}

const eratosfen = (yourChoice) => {
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
    return result;
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

const euler = (yourChoice) => {
    const yourChoiceDividers = dividers(yourChoice);

    let result = 0;
    for (let i = 1; i < yourChoice; i += 1) {
    	const iDividers = dividers(i);
    	if (!checkForCommonDividers(yourChoiceDividers, iDividers)) {
    		result += 1;
    	}
    }
    return result;
}

export { mathematics, divider, numberDividers, eratosfen, euler };