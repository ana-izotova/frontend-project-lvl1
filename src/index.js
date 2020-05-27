import readlineSync from 'readline-sync';

const gameEngine = (gameMessage, getConditions) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameMessage);

  const roundsQuantity = 3;

  for (let i = 0; i < roundsQuantity; i += 1) {
    const [gameQuestion, rightAnswer] = getConditions();

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
