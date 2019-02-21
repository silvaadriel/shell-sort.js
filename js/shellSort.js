import Iteration from './iteration.js';

export default function shellSort(array) {
  const newArray = array.slice(0);

  let gap = Math.floor(newArray.length/2);
  let aux, j;
  const iteration = new Iteration();

  while (gap > 0) {
    for (let i = gap; i < newArray.length; i++) {
      aux = newArray[i];
      j = i;

      if (!(j >= gap && aux < newArray[j - gap])) iteration.addActiveClass(j, j - gap);

      while (j >= gap && aux < newArray[j - gap]) {

        iteration.addActiveClass(j, j - gap);

        newArray[j] = newArray[j - gap];

        iteration.swap(j, j - gap);
        
        j = j - gap;
      }
      newArray[j] = aux;
    }
    gap = Math.floor(gap/2);
  }
  return iteration.getArrayIteration();
}
