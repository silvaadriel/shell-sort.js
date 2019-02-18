function createStructuredArray(array) {
  const structuredArray = getStructuredArray(array);
  return structuredArray;
};

const getStructuredArray = (array, squareSize = 70) => {
  return array.map((number, indexNumber) => {
    const liElement = document.createElement('li');
    liElement.innerText = number;
    liElement.style.left = `${squareSize * indexNumber}px`;
    return liElement;
  });
};

function centralize(nodeList, array) {
  nodeList.style.marginLeft = `-${(70 * array.length) / 2}px`;
};

function appendStructuredArray(nodeList, structuredArray) {
  centralize(nodeList, structuredArray);
  array.forEach((element) => {
    nodeList.append(element);
  });
};

export default {
  createStructuredArray,
  appendStructuredArray
};