import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const gameStartMessage = 'Find the greatest common divisor of given numbers.';

const generateGameGCDConditions = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();

  const rightAnswer = gcd(firstNum, secondNum).toString();

  const gameQuestion = `Question: ${firstNum} ${secondNum}`;

  return [gameQuestion, rightAnswer];
};

const startGameGCD = () => gameEngine(gameStartMessage, generateGameGCDConditions);

export default startGameGCD;
