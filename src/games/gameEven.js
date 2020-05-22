import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (num) => num % 2 === 0;

const gameMessage = 'Answer "yes" if the number is even, otherwise answer is "no".';

const generateData = () => {
  const gameQuestion = getRandomInt();
  const rightAnswer = isEven(gameQuestion) ? 'yes' : 'no';

  return [gameQuestion, rightAnswer];
};

const startGameEven = () => gameEngine(gameMessage, generateData);

export default startGameEven;
