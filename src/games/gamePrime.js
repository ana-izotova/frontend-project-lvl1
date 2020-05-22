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

const gameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateData = () => {
  const gameQuestion = getRandomInt();
  const rightAnswer = isPrime(gameQuestion) ? 'yes' : 'no';

  return [gameQuestion, rightAnswer];
};

const startGamePrime = () => gameEngine(gameMessage, generateData);

export default startGamePrime;
