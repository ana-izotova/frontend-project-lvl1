import readlineSync from 'readline-sync';
import { getRandomInt } from '../index.js';

const gameCalc = () => {
  const operators = ['+', '-', '*'];
  const operatorsIndex = Math.floor(Math.random() * 3);
  const operation = operators[operatorsIndex];

  const rundomNum1 = (getRandomInt());
  const rundomNum2 = (getRandomInt());

  let result = 0;
  switch (operatorsIndex) {
    case 0: result = rundomNum1 + rundomNum2; break;
    case 1: result = rundomNum1 - rundomNum2; break;
    case 2: result = rundomNum1 * rundomNum2; break;
    default: console.log(`There's no such ${operatorsIndex}`);
  }
  const rightAnswer = result;

  console.log(`Question: ${rundomNum1} ${operation} ${rundomNum2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  const answersPair = [userAnswer, rightAnswer];

  return answersPair;
};

export default gameCalc;
