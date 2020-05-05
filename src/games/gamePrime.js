import readlineSync from 'readline-sync';
import gameEngine, { getRandomInt } from '../index.js';

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

const gameStartMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  const num = getRandomInt();

  let rightAnswer = '';
  if (isPrime(num)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');

  return [userAnswer, rightAnswer];
};

const startGamePrime = () => gameEngine(gameStartMessage, gamePrime);

export default startGamePrime;
