import { showInformations } from './userfulInformations.js'

export default function animate(iterationList, listItens, delay, playbackStatus) {
let currentIteration = 0;
console.log(iterationList);
  const animationLoop = setInterval(() => {
    if (currentIteration === iterationList.length) {
      clearInterval(animationLoop);
      removeActiveClass(listItens);
      return;
    }

    if (!playbackStatus.isPaused) {
      removeActiveClass(listItens);
      showInformations(iterationList[currentIteration], listItens);
      addActiveClass(iterationList[currentIteration], listItens);
      swapElement(iterationList[currentIteration], listItens);
      currentIteration = nextIteration(currentIteration);
    }

  }, delay);
}

function removeActiveClass(nodeList) {
  nodeList.forEach((e) => e.classList.remove('active'));
}

function addActiveClass(nodeElement, nodeList) {
  nodeElement.activeElement.forEach((e) => {
    nodeList[e].classList.add('active');
  });
}

function swapElement(currentIterartion, nodeList) {
  if (!currentIterartion.swapElement.length) return;

  currentIterartion.swapElement.reduce((accumulator, currentValue) => {
    const accumulatorPosition = nodeList[accumulator].style.left;
    const currentValuePosition = nodeList[currentValue].style.left;

    [nodeList[accumulator].innerText, nodeList[currentValue].innerText] = [nodeList[currentValue].innerText, nodeList[accumulator].innerText];

    nodeList[accumulator].animate([
      // keyframes 
      { left: accumulatorPosition }, 
      { left: `${+accumulatorPosition.replace('px', '')/ 2 + +currentValuePosition.replace('px', '')/2}px` }, 
      { left: accumulatorPosition }, 
    ], { 
      // timing options
      easing: 'ease',
      duration: 300,
    });

    nodeList[currentValue].animate([
      // keyframes 
      { left: currentValuePosition }, 
      { left: `${+accumulatorPosition.replace('px', '')/ 2 + +currentValuePosition.replace('px', '')/2}px` }, 
      { left: currentValuePosition }, 
    ], { 
      // timing options
      easing: 'ease',
      duration: 300,
    });
    
    return currentValue;
  });
}

function nextIteration(currentIterartion) {
  return currentIterartion + 1;
}
