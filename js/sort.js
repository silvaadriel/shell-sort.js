import shellSort from './shellSort.js';
import animate from './animate.js';

export default function startSorting(numbersList, nodeList, playbackStatus) {
    const iteration = shellSort(numbersList);
    animate(iteration, nodeList, 500, playbackStatus);
};
