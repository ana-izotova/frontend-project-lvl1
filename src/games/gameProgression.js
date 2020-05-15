import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameStartMessage = 'What number is missing in the progression?';

const generateGameProgressionConditions = () => {
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

  const gameQuestion = `Question: ${progressionArr}`;

  return [gameQuestion, rightAnswer];
};

const startGameProgression = () => gameEngine(gameStartMessage, generateGameProgressionConditions);

export default startGameProgression;
