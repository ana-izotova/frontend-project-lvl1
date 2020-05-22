import readlineSync from 'readline-sync';

const gameEngine = (gameMessage, conditions) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameMessage);

  const roundQuantity = 3;
  let rightAnswersCounter = 0;

  for (let i = 0; i < roundQuantity; i += 1) {
    const gameConditions = conditions();
    const [gameQuestion, rightAnswer] = gameConditions;

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer.toString()) {
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
