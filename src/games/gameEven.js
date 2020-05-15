import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (num) => num % 2 === 0;

const gameMessage = 'Answer "yes" if the number is even, otherwise answer is "no".';

const generateGameEvenConditions = () => {
  const askedNumber = getRandomInt();

  const rightAnswer = isEven(askedNumber) ? 'yes' : 'no';

  const gameQuestion = `Question: ${askedNumber}`;

  return [gameQuestion, rightAnswer];
};

const startGameEven = () => gameEngine(gameMessage, generateGameEvenConditions);

export default startGameEven;
