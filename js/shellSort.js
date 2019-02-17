import Iteration from './iteration.js';

export default function shellSort(array) {
  let gap = Math.floor(array.length/2);
  let aux, j;
  const iteration = new Iteration();

  while (gap > 0) {
    for (let i = gap; i < array.length; i++) {
      aux = array[i];
      j = i;

      iteration.addActiveClass(j, j - gap);

      while (j >= gap && aux < array[j - gap]) {

        iteration.addActiveClass(j, j - gap);

        array[j] = array[j - gap];

        iteration.swap(j, j - gap);
        
        j = j - gap;
      }
      array[j] = aux;
    }
    gap = Math.floor(gap/2);
  }
  return iteration.getArrayIteration();
}
