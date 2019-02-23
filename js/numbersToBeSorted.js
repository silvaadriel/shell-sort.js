const array = [];

const getRandomArray = () => {
  const arrayLength = getRandomIntNumber(15, 5);
  const numbersToBeSorted = [];

  for (let i = 0; i < arrayLength; i++) {
    numbersToBeSorted.push(getRandomIntNumber(99, 0));
  }
  return numbersToBeSorted;
};

const getRandomIntNumber = (max, min) => {
  return Math.floor(
    Math.random() * (max - min) + min,
  );
};

export const setNumbersToBeSorted = (numbersToBeSortedList = []) => {
  if (numbersToBeSortedList.length) {
    array.push(numbersToBeSortedList);
  } else {
    array.push(getRandomArray());
  }
};

export const getNumbersToBeSorted = () => array[array.length - 1];

export default {
  setNumbersToBeSorted,
  getNumbersToBeSorted
};
