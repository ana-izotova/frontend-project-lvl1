import readlineSync from 'readline-sync';
import { getRandomInt, greeting } from '../index.js';

const gameCalc = () => {
  const userName = greeting();

  let rightAnswersCounter = 0;

  for (let i = 0; i < 3; i += 1) {
    const operators = ['+', '-', '*'];
    const operatorsIndex = Math.floor(Math.random() * 3);
    const operation = operators[operatorsIndex];

    const rundomNum1 = (getRandomInt(20));
    const rundomNum2 = (getRandomInt(20));

    let result = 0;
    switch (operatorsIndex) {
      case 0: result = rundomNum1 + rundomNum2; break;
      case 1: result = rundomNum1 - rundomNum2; break;
      case 2: result = rundomNum1 * rundomNum2; break;
      default: console.log(`There's no such ${operatorsIndex}`);
    }
    result = Number(result);
    const userAnswer = readlineSync.question(`Question: ${rundomNum1} ${operation} ${rundomNum2} `);

    if (userAnswer === result) {
      console.log('Correct!');
      rightAnswersCounter += 1;
    } else {
      console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${result}".\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (rightAnswersCounter === 3) {
    console.log('Congrats!');
  }
};

export default gameCalc;
