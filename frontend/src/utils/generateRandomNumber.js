const generateRandomNumber = ({ start = 1, limit, exclude = [] }) => {
  if (exclude.length > 0) {
    let number;

    do {
      number = Math.ceil(Math.random() * limit);
    } while (exclude.includes(number));

    return number;
  }

  return Math.ceil(Math.random() * limit);
};

export default generateRandomNumber;
