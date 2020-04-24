import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const getRundomArr = (num) => {
  const arr = [];
  for (let a = 0; arr.length < num; a += 1) {
    const newNum = (getRandomInt(20));
    if (!arr.includes(newNum)) {
      arr.push(newNum);
    }
  }
  return arr;
};

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};
