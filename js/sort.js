import shellSort from './shellSort.js';
import animate from './animate.js';

export default function startSorting(numbersList, nodeList, playbackStatus) {
    const iteration = shellSort(numbersList);
    const speed = document.querySelector('#speed').value;
    const delay = +speed * 1000;

    animate(iteration, nodeList, delay, playbackStatus);
};
