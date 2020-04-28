import readlineSync from 'readline-sync';
import { getRandomInt } from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const isEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer is "no".');

  const number = getRandomInt();

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = isEven(number);

  const answersPair = [userAnswer, rightAnswer];

  return answersPair;
};

export default isEvenGame;
