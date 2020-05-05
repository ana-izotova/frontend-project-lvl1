import readlineSync from 'readline-sync';
import gameEngine, { getRandomInt } from '../index.js';

const gameStartMessage = 'What is the result of the expression?';

const gameCalc = () => {
  const operators = ['+', '-', '*'];
  const operatorsIndex = getRandomInt(1, operators.length);
  const operation = operators[operatorsIndex];

  const randomNum1 = (getRandomInt());
  const randomNum2 = (getRandomInt());

  let result = 0;
  switch (operatorsIndex) {
    case 0: result = randomNum1 + randomNum2; break;
    case 1: result = randomNum1 - randomNum2; break;
    case 2: result = randomNum1 * randomNum2; break;
    default: console.log(`There's no such ${operatorsIndex}`);
  }
  const rightAnswer = result;

  console.log(`Question: ${randomNum1} ${operation} ${randomNum2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  return [userAnswer, rightAnswer];
};

const startGameCalc = () => gameEngine(gameStartMessage, gameCalc);

export default startGameCalc;
