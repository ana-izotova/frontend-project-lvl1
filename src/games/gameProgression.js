import readlineSync from 'readline-sync';
import { getRandomInt } from '../index.js';

const gameProgression = () => {
  console.log('What number is missing in the progression?');

  let progressionArr = [];
  const progressionStep = getRandomInt();
  for (let i = getRandomInt(); progressionArr.length < 10; i += progressionStep) {
    progressionArr.push(i);
  }

  const hiddenNum = getRandomInt();
  const rightAnswer = progressionArr[hiddenNum];

  progressionArr[hiddenNum] = '..';

  progressionArr = progressionArr.join(' ');

  console.log(`Question: ${progressionArr}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const answersPair = [userAnswer, rightAnswer];

  return answersPair;
};

export default gameProgression;
