import readlineSync from 'readline-sync';
import gameEngine, { getRandomInt } from '../index.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const gameStartMessage = 'Find the greatest common divisor of given numbers.';

const gameGCD = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();

  const rightAnswer = gcd(firstNum, secondNum);

  console.log(`Question: ${firstNum} ${secondNum}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  return [userAnswer, rightAnswer];
};

const startGameGCD = () => gameEngine(gameStartMessage, gameGCD);

export default startGameGCD;
