import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const gameMessage = 'Find the greatest common divisor of given numbers.';

const generateData = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();

  const rightAnswer = gcd(firstNum, secondNum);
  const gameQuestion = `${firstNum} ${secondNum}`;

  return [gameQuestion, rightAnswer.toString()];
};

const startGameGCD = () => gameEngine(gameMessage, generateData);

export default startGameGCD;
