import readlineSync from 'readline-sync';
import gameEngine, { getRandomInt } from '../index.js'

const gameStartMessage = 'What number is missing in the progression?';

const gameProgression = () => {
  let progressionArr = [];
  const progressionStep = getRandomInt();
  const progressionLength = 10;
  for (let i = getRandomInt(); progressionArr.length < progressionLength; i += progressionStep) {
    progressionArr.push(i);
  }

  const hiddenNum = getRandomInt(0, progressionLength);
  const rightAnswer = progressionArr[hiddenNum];
  progressionArr[hiddenNum] = '..';

  progressionArr = progressionArr.join(' ');

  console.log(`Question: ${progressionArr}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  return [userAnswer, rightAnswer];
};

const startGameProgression = () => gameEngine(gameStartMessage, gameProgression);

export default startGameProgression;
