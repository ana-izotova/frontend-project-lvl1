import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomInt = () => {
  const min = Math.ceil(1);
  const max = Math.floor(20);
  return Math.floor(Math.random() * (max - min)) + min;
};

const gameEngine = (condition) => {
  const userName = greeting();

  let rightAnswersCounter = 0;

  for (let i = 0; i < 3; i += 1) {
    const answersPair = condition();
    console.log(answersPair);

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
