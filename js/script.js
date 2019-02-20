import startSorting from './sort.js';
import structureArray from './arrayStructure.js';
import { numbersToBeSorted } from './numbersToBeSorted.js';

const ulHtmlElement = document.querySelector('#array');

const btnStart = document.querySelector('#btnStart');
const btnReset = document.querySelector('#btnReset');

btnStart.addEventListener('click', (event) => {
  event.preventDefault();
  event.currentTarget.disabled = true;
  btnReset.disabled = false;
  const itemsList = document.querySelectorAll('#array li');
  startSorting(numbersToBeSorted(), itemsList);
});

btnReset.addEventListener('click', (event) => {
  event.preventDefault();
  event.currentTarget.disabled = true;
  btnStart.disabled = false;
  structureArray.render(numbersToBeSorted());
});

structureArray.render(numbersToBeSorted());
