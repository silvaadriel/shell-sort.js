import shellSort from './shellSort.js';
import arrayStructure from './arrayStructure.js';
import animate from './animate.js';

const htmlUlElement = document.querySelector('#array');

const numbersArray = [9, 2, 1, 0, 5, 7, 8, 3, 4, 6, 10, 12, 11];

const htmlArrayStructure = arrayStructure.createArrayStructure(numbersArray);

arrayStructure.appendArrayStructure(htmlUlElement, htmlArrayStructure);

const listItens = document.querySelectorAll('#array li');

function startSorting(numbersArray, nodeList) {
  const iteration = shellSort(numbersArray);
  animate(iteration, nodeList, 500);
}

startSorting(numbersArray, listItens);
