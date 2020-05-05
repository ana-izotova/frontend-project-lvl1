import readlineSync from 'readline-sync';
import gameEngine, { getRandomInt } from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const gameStartMessage = 'Answer "yes" if the number is even, otherwise answer is "no".';

const isEvenGame = () => {
  const number = getRandomInt();

  let rightAnswer = '';
  if (isEven(number)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  return [userAnswer, rightAnswer];
};

const startIsEvenGame = () => gameEngine(gameStartMessage, isEvenGame);

export default startIsEvenGame;
