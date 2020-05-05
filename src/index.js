import readlineSync from 'readline-sync';

export const getRandomInt = (min = 1, max = 20) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const gameEngine = (gameQuestion, conditions) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameQuestion);

  const roundQuantity = 3;
  let rightAnswersCounter = 0;

  for (let i = 0; i < roundQuantity; i += 1) {
    const gameConditions = conditions();
    const [userAnswer, rightAnswer] = gameConditions;

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      rightAnswersCounter += 1;
    } else {
      console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
      break;
    }
  }

  if (rightAnswersCounter === roundQuantity) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameEngine;
