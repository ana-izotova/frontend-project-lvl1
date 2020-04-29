import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomInt = (min = 1, max = 20) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const gameEngine = (condition) => {
  const userName = greeting();

  let rightAnswersCounter = 0;

  for (let i = 0; i < 3; i += 1) {
    const answersPair = condition();

    if (answersPair[0] === answersPair[1]) {
      console.log('Correct!');
      rightAnswersCounter += 1;
    } else {
      console.log(`"${answersPair[0]}" is a wrong answer ;(. Correct answer was "${answersPair[1]}".\nLet's try again, ${userName}!`);
      break;
    }
  }

  if (rightAnswersCounter === 3) {
    console.log('Congrats!');
  }
};

export default gameEngine;
