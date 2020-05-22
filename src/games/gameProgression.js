import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameMessage = 'What number is missing in the progression?';

const generateData = () => {
  const progression = [];

  const progressionStep = getRandomInt();
  const progressionLength = 10;
  const firstNum = getRandomInt();

  for (let i = 0; i < progressionLength; i += 1) {
    const progressionItem = firstNum + progressionStep * i;
    progression.push(progressionItem);
  }

  const hiddenNumIndex = getRandomInt(0, progressionLength - 1);
  const rightAnswer = progression[hiddenNumIndex];
  progression[hiddenNumIndex] = '..';
  const gameQuestion = progression.join(' ');

  return [gameQuestion, rightAnswer];
};

const startGameProgression = () => gameEngine(gameMessage, generateData);

export default startGameProgression;
