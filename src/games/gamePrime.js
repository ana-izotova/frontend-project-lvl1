import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const gameStartMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGamePrimeConditions = () => {
  const askedNumber = getRandomInt();

  const rightAnswer = isPrime(askedNumber) ? 'yes' : 'no';
  const gameQuestion = `Question: ${askedNumber}`;

  return [gameQuestion, rightAnswer];
};

const startGamePrime = () => gameEngine(gameStartMessage, generateGamePrimeConditions);

export default startGamePrime;
