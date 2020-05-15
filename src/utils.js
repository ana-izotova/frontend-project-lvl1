const getRandomInt = (min = 1, max = 20) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

export default getRandomInt;
