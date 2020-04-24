import readlineSync from 'readline-sync';
import { greeting, getRundomArr, gcd } from '../index.js';

const gameGCD = () => {
  const userName = greeting();
  const arr = getRundomArr(6);

  console.log('Find the greatest common divisor of given numbers.');

  let rightAnswersCounter = 0;

  for (let i = 0; i < 6; i += 2) {
    const firstNum = arr[i];
    const secondNum = arr[i + 1];

    const result = gcd(firstNum, secondNum);

    const userAnswer = Number(readlineSync.question(`Question: ${firstNum} ${secondNum} `));

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

export default gameGCD;
