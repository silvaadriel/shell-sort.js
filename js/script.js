import startSorting from './sort.js';
import { getNumbersToBeSorted, setNumbersToBeSorted } from './numbersToBeSorted.js'
import { Button } from './controls.js';
import arrayStructure from './arrayStructure.js';

setNumbersToBeSorted();

const playbackStatus = {
  isPaused: false
};

const handleStartSorting = () => {
  startSorting(getNumbersToBeSorted(), arrayStructure.getItemsList(), playbackStatus);
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
  arrayStructure.render(getNumbersToBeSorted());
});

btnReset.keyPress('Escape');

const btnRandom = new Button('#btnRandom');
btnRandom.onClick(() => {
  setNumbersToBeSorted();
  btnPlayPause.disabled(true);
  btnSort.disabled(false);
  arrayStructure.render(getNumbersToBeSorted());
});

arrayStructure.render(getNumbersToBeSorted());
