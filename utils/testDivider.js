import * as readlineSync from 'readline-sync';
import getDividers from './functions.js';

let yourChoice;
do {
  yourChoice = Number(readlineSync.question('Please enter number: '));
} while (Number.isNaN(yourChoice));
const result = getDividers(yourChoice);
console.log(result.sort((a, b) => a - b));
