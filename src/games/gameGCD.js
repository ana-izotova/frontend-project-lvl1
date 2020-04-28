import readlineSync from 'readline-sync';
import { getRandomInt } from '../index.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const gameGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');

  const firstNum = getRandomInt();
  const secondNum = getRandomInt();

  const rightAnswer = gcd(firstNum, secondNum);

  console.log(`Question: ${firstNum} ${secondNum}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  const answersPair = [userAnswer, rightAnswer];
  return answersPair;
};

export default gameGCD;
