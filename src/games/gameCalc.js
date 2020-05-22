import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameMessage = 'What is the result of the expression?';

const generateData = () => {
  const operations = ['+', '-', '*'];
  const index = getRandomInt(1, operations.length);
  const operation = operations[index];

  const randomNum1 = (getRandomInt());
  const randomNum2 = (getRandomInt());

  let result;
  switch (operation) {
    case '+': result = randomNum1 + randomNum2; break;
    case '-': result = randomNum1 - randomNum2; break;
    case '*': result = randomNum1 * randomNum2; break;
    default: break;
  }

  const rightAnswer = result;
  const gameQuestion = `${randomNum1} ${operation} ${randomNum2}`;

  return [gameQuestion, rightAnswer];
};

const startGameCalc = () => gameEngine(gameMessage, generateData);

export default startGameCalc;
