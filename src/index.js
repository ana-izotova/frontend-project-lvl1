import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const isEvenGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer is "no".');
  const arr = [];
  for (let a = 0; arr.length < 3; a += 1) {
    const newNum = (getRandomInt(20));
    if (!arr.includes(newNum)) {
      arr.push(newNum);
    }
  }
  let i = 0;
  for (let j = 0; j < arr.length; j += 1) {
    const number = arr[j];
    const userAnswer = readlineSync.question(`Question: ${number} `);
    if (isEven(number) === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${isEven(number)}". Let's try again, ${userName}!`);
      break;
    }
  }
  if (i === arr.length) {
    console.log(`Congratulations, ${userName}!`);
  }
};
