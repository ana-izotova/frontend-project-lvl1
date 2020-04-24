import readlineSync from 'readline-sync';
import { greeting, getRundomArr, isEven } from '../index.js';

const isEvenGame = () => {
  const userName = greeting();
  const arr = getRundomArr(3);

  console.log('Answer "yes" if the number is even, otherwise answer is "no".');

  let i = 0;
  for (let j = 0; j < arr.length; j += 1) {
    const number = arr[j];
    const userAnswer = readlineSync.question(`Question: ${number} `);
    if (isEven(number) === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${isEven(number)}".\nLet's try again, ${userName}!`);
      break;
    }
  }

  if (i === arr.length) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default isEvenGame;
