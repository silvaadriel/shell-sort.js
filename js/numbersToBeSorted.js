const array = [];

const getRandomArray = () => {
  const arrayLength = Math.floor(Math.random() * (15 - 5) + 5);
  const numbersToBeSorted = [];

  for (let i = 0; i < arrayLength; i++) {
    numbersToBeSorted.push(Math.floor(Math.random() * 99));
  }
  return numbersToBeSorted;
};

export const setNumbersToBeSorted = (numbersToBeSortedList = []) => {
  if (numbersToBeSortedList.length) {
    array.push(numbersToBeSortedList);
  } else {
    array.push(getRandomArray());
  }
};

export const getNumbersToBeSorted = () => {
  return array[array.length - 1];
};

export default {
  setNumbersToBeSorted,
  getNumbersToBeSorted
};
