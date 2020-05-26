import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameMessage = 'What is the result of the expression?';

const generateData = () => {
  const operations = ['+', '-', '*'];
  const index = getRandomInt(0, operations.length - 1);
  const operation = operations[index];

  const randomNum1 = (getRandomInt());
  const randomNum2 = (getRandomInt());

  let rightAnswer;
  switch (operation) {
    case '+': rightAnswer = randomNum1 + randomNum2; break;
    case '-': rightAnswer = randomNum1 - randomNum2; break;
    case '*': rightAnswer = randomNum1 * randomNum2; break;
    default: break;
  }

  const gameQuestion = `${randomNum1} ${operation} ${randomNum2}`;

  return [gameQuestion, rightAnswer.toString()];
};

const startGameCalc = () => gameEngine(gameMessage, generateData);

export default startGameCalc;
