import shellSort from './shellSort.js';
import animate from './animate.js';

export default function startSorting(numbersList, nodeList) {
    const iteration = shellSort(numbersList);
    animate(iteration, nodeList, 1000);
};
