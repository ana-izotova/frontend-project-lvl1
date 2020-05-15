import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameStartMessage = 'What is the result of the expression?';

const generateGameCalcConditions = () => {
  const operators = ['+', '-', '*'];
  const operatorsIndex = getRandomInt(1, operators.length);
  const operation = operators[operatorsIndex];

  const randomNum1 = (getRandomInt());
  const randomNum2 = (getRandomInt());

  let result = 0;
  switch (operatorsIndex) {
    case operators[0]: result = randomNum1 + randomNum2; break;
    case operators[1]: result = randomNum1 - randomNum2; break;
    case operators[2]: result = randomNum1 * randomNum2; break;
    default: break;
  }
  const rightAnswer = result.toString();
  const gameQuestion = `Question: ${randomNum1} ${operation} ${randomNum2}`;

  return [gameQuestion, rightAnswer];
};

const startGameCalc = () => gameEngine(gameStartMessage, generateGameCalcConditions);

export default startGameCalc;
