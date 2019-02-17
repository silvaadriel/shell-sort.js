export default function Iteration() {
  const arrayIteration = [];

  this.getArrayIteration = function() {
    return arrayIteration;
  } 

  const lastArrayPosition = function(array) {
    return array[array.length - 1];
  }

  this.addActiveClass = function(...activeElement) {
    arrayIteration.push({ activeElement });
  }

  this.swap = function(...swapElement) {
    lastArrayPosition(arrayIteration).swapElement = swapElement;
  }

}
