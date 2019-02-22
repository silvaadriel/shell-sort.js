import Iteration from './iteration.js';

export default function shellSort(array) {
  const arrayCopy = array.slice(0);

  let gap = Math.floor(arrayCopy.length/2);
  let aux, j;
  const iteration = new Iteration();

  while (gap > 0) {
    for (let i = gap; i < arrayCopy.length; i++) {
      aux = arrayCopy[i];
      j = i;

      if (!(j >= gap && aux < arrayCopy[j - gap])) iteration.addActiveClass(j, j - gap);

      while (j >= gap && aux < arrayCopy[j - gap]) {

        iteration.addActiveClass(j, j - gap);

        arrayCopy[j] = arrayCopy[j - gap];

        iteration.swap(j, j - gap);
        
        j = j - gap;
      }
      arrayCopy[j] = aux;
    }
    gap = Math.floor(gap/2);
  }
  return iteration.getArrayIteration();
}
