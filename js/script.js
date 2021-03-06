import startSorting from './sort.js';
import { getNumbersToBeSorted, setNumbersToBeSorted } from './numbersToBeSorted.js'
import { Button, SlideControl } from './controls.js';
import arrayStructure from './arrayStructure.js';
import { clearInformations } from './userfulInformations.js'
import { hiddenDisplayInput } from './hiddenDisplayInput.js';
import playbackStatus from './playbackStatus.js';

const ARRAY_TO_BE_SORTED = [];

setNumbersToBeSorted(ARRAY_TO_BE_SORTED);
clearInformations();

const playback = playbackStatus();


const handleStartSorting = () => {
  startSorting(getNumbersToBeSorted(), arrayStructure.getItemsList(), playback.getPlaybackStatus());
  btnSort.disabled(true);
  btnPlayPause.disabled(false);
};

const btnSort = new Button('#btnSort');
btnSort.onClick(handleStartSorting);

btnSort.keyPress('KeyS');


const slideControl = new SlideControl('#slider');
slideControl.setNextSlideKey('ArrowRight');
slideControl.setPreviousSlideKey('ArrowLeft');

const btnSlide = new Button('#btnSlide');
btnSlide.onClick(() => {
  const slider = slideControl.getSlider('#slider');
  slider.classList.toggle('active');
  slideControl.setCurrentSlideToOne();
  slider.classList.contains('active')
    ? btnSlide.btn.innerText = 'FECHAR'
    : btnSlide.btn.innerText = 'SLIDE';
});

const btnPlayPause = new Button('#btnPlayPause');
btnPlayPause.onClick(() => {
  playback.playPause(() => {
    startSorting(getNumbersToBeSorted(), arrayStructure.getItemsList(), playback.getPlaybackStatus());
  });
});
btnPlayPause.disabled(true);
btnPlayPause.keyPress('Space');

const btnReset = new Button('#btnReset');
btnReset.onClick(() => {
  btnPlayPause.disabled(true);
  btnSort.disabled(false);
  arrayStructure.render(getNumbersToBeSorted());
  clearInformations();
  playback.clearPlaybackStatus();
});

btnReset.keyPress('Escape');

const btnRandom = new Button('#btnRandom');
btnRandom.onClick(() => {
  setNumbersToBeSorted();
  btnPlayPause.disabled(true);
  btnSort.disabled(false);
  arrayStructure.render(getNumbersToBeSorted());
  clearInformations();
  playback.clearPlaybackStatus();
});

arrayStructure.render(getNumbersToBeSorted());

const disableButton = document.querySelector('button[name=btnDisabled]');
disableButton.onclick = () => {
  const input = document.querySelector('.input');
  hiddenDisplayInput(input);
};

const input = document.querySelector('.input');
input.addEventListener('keydown', (e) => {
  if (e.code === 'Enter' || e.code === 'NumpadEnter') {
    e.preventDefault();
    addButton.click();
  }
});

const clearArray = new Button('#btnClear');
clearArray.onClick(() => {
  ARRAY_TO_BE_SORTED.length = 0;
  arrayStructure.render([]);
});

const addButton = document.querySelector('button[name=btnAddArray]');
addButton.onclick = () => {
  const inputValues = document.querySelector('input[name=inputValues]');
  inputValues.value === '' || inputValues.value.match(/\D|\d{3}/g)
    ? alert('You must enter an integer from 0 to 99')
    : ARRAY_TO_BE_SORTED.push(+inputValues.value);
  setNumbersToBeSorted(ARRAY_TO_BE_SORTED);
  arrayStructure.render(ARRAY_TO_BE_SORTED);
  inputValues.value = '';
  btnSort.disabled(false);
  btnPlayPause.disabled(true);
  playback.clearPlaybackStatus();
  clearInformations();
};

document.addEventListener('dblclick', () => {
  const bg = document.querySelector('#background-img');
  bg.classList.toggle('active');
});
