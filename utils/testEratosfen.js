import * as readlineSync from 'readline-sync';
import { eratosfen } from './functions.js';

let yourChoice;
do {
  yourChoice = Number(readlineSync.question('Please enter number: '));
} while (Number.isNaN(yourChoice));
console.log('primes:');
const result = eratosfen(yourChoice);
const keys = Object.keys(result);

for (let i = 0; i <= keys.length; i += 1) {
  const key = keys[i];
  const value = result[key];
  if (value) {
    console.log(key);
  }
}
