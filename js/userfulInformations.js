const gap = document.querySelector('#gap');
const numberOfSwap = document.querySelector('#numberOfSwap');
const numbersComparison = document.querySelector('#numbersComparison');

export const showInformations = function(iteration, listItens) {
  gap.innerText = iteration.usefulInformations.gap;
  numberOfSwap.innerText = iteration.usefulInformations.numberOfSwap;

  if (iteration.finished) {
    numbersComparison.innerText = 'Finished';
  } else if (iteration.swapElement.length) {
    numbersComparison.innerText = `${listItens[iteration.activeElement[1]].innerText} > ${listItens[iteration.activeElement[0]].innerText}\nswap`;
  } else {
    numbersComparison.innerText = `${listItens[iteration.activeElement[1]].innerText} > ${listItens[iteration.activeElement[0]].innerText}`;
  }
};

export const clearInformations = function() {
  gap.innerText = '0';
  numberOfSwap.innerText = '0';
  numbersComparison.innerText = `Let's Sort!`;
};

export default {
  showInformations,
  clearInformations
}