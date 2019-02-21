import startSorting from './sort.js';
import { numbersToBeSorted } from './numbersToBeSorted.js'
import { Button } from './controls.js';
import arrayStructure from './arrayStructure.js';

const playbackStatus = {
  isPaused: false
};

const handleStartSorting = () => {
  startSorting(numbersToBeSorted(), arrayStructure.getItemsList(), playbackStatus);
  btnSort.disabled(true);
  btnPlayPause.disabled(false);
  playbackStatus.isPaused = false;
};

const btnSort = new Button('#btnSort');
btnSort.onClick(handleStartSorting);

btnSort.keyPress('Enter');

const btnPlayPause = new Button('#btnPlayPause');
btnPlayPause.onClick(() => {
  playbackStatus.isPaused = !playbackStatus.isPaused;
});
btnPlayPause.disabled(true);
btnPlayPause.keyPress('Space');

const btnReset = new Button('#btnReset');
btnReset.onClick(() => {
  btnPlayPause.disabled(true);
  btnSort.disabled(false);
  arrayStructure.render(numbersToBeSorted());
});

btnReset.keyPress('Escape');

arrayStructure.render(numbersToBeSorted());
