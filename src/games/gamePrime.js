import readlineSync from 'readline-sync';
import { getRandomInt } from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const gamePrime = () => {
  const num = getRandomInt();

  let rightAnswer = '';
  if (isPrime(num)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const answersPair = [userAnswer, rightAnswer];

  return answersPair;
};

export default gamePrime;
