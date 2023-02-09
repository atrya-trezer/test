import * as readlineSync from 'readline-sync';
import { numberDividers } from './functions.js';

let dividersCount;
do {
  dividersCount = Number(readlineSync.question('Please enter number: '));
} while (Number.isNaN(dividersCount));

let yourLimit;
do {
  yourLimit = Number(readlineSync.question('Please enter limit: '));
} while (Number.isNaN(yourLimit));

const result = numberDividers(dividersCount, yourLimit);
console.log(result);
