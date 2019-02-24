export default function Iteration() {
  const arrayIteration = [];

  this.getArrayIteration = function() {
    return arrayIteration;
  };

  const lastArrayPosition = function(array) {
    return array[array.length - 1];
  };

  this.addActiveClass = function(usefulInformations, ...activeElement) {
    arrayIteration.push(
      {
        activeElement,
        swapElement: [],
        usefulInformations,
        finished: false
      },
    );
  };

  this.swap = function(usefulInformations, ...swapElement) {
    arrayIteration.push(
      {
        activeElement: lastArrayPosition(arrayIteration).activeElement,
        swapElement,
        usefulInformations,
        finished: false
      },
    );
  };

  this.finished = function() {
    lastArrayPosition(arrayIteration).finished = true;
  };
};
