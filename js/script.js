import { insertionSort } from 'insertionSort';

const array = document.querySelector('#array');

const numbersList = [9, 2, 1, 0, 5, 7, 8, 3, 4, 6];

numbersList.forEach((number) => {
  const spanElement = document.createElement('span');
  spanElement.innerText = number;
  array.appendChild(spanElement);
});

const listItens = document.querySelectorAll('#array span');

const getGap = (array) => {
  return Math.floor(array.length/2);
}

const addActiveClass = (...elements) => {
  elements.forEach((element) => {
    element.classList.add('active');
  });
}

const removeActiveClass = (elements) => {
  elements.forEach((element) => {
    element.classList.remove('active');
  });
}

const swap = (minorElement, majorElement) => {
  minorElement.style.transform = `translate3d(${majorElement.offsetLeft}px,0,0)`;
  majorElement.style.transform = `translate3d(${minorElement.offsetLeft}px,0,0)`;
}

const shellSort = (array, { i, j, aux, gap, isInsertionSort }) => {
  if (i < array.length){
    aux = array[i];
    j = i;

    removeActiveClass(listItens);
    addActiveClass(listItens[j], listItens[j - gap]);
    
    if (j >= gap && aux < array[j - gap]) {
      isInsertionSort = true;
      insertionSort(array, { i, j, aux, gap, isInsertionSort });
    } else {
      array[j] = aux;
      //swap(listItens[i], listItens[j]);
      listItens[j].innerText = aux;
      i++;
    }
  }
  if (i === array.length) {
    gap = Math.floor(gap/2);
    i = gap;
    console.log(array);
  }
  return { i, j, aux, gap, isInsertionSort };
}

const insertionSort = (array, { i, j, aux, gap, isInsertionSort }) => {
  if (j >= gap && aux < array[j - gap]) {
    array[j] = array[j - gap];
    listItens[j].innerText = array[j - gap];
    j = j - gap;

    addActiveClass(listItens[j]);
  } else {
    array[j] = aux;
    listItens[j].innerText = aux;
    i++;
    isInsertionSort = false;
  }
  return { i, j, aux, gap, isInsertionSort };
}

function startSorting(numbersList) {
  let obj = {
    i: getGap(numbersList),
    j: 0,
    aux: 0,
    gap: getGap(numbersList),
    isInsertionSort: false
  };

  const loop = setInterval(() => {
    if (obj.gap === 0) clearInterval(loop);

    if (!obj.isInsertionSort) {
      obj = shellSort(numbersList, obj);
    } else {
      obj = insertionSort(numbersList, obj);
    }

  }, 350);
}

startSorting(numbersList);
