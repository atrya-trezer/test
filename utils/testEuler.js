import * as readlineSync from 'readline-sync';
import { euler } from './functions.js';

let yourChoice;
do {
  yourChoice = Number(readlineSync.question('Please enter number: '));
} while (Number.isNaN(yourChoice));

const result = euler(yourChoice);
console.log(result);
