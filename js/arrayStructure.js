function createStructuredArray(array) {
  createArrayIndexStructure(array);
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

function createArrayIndexStructure(array, squareSize = 70) {
  const arrayIndexStructure = array.map((element, index) => {
    const liElement = document.createElement('li');
    liElement.innerText = index;
    liElement.style.left = `${squareSize * index}px`;
    return liElement;
  });
  const ulHtmlElement = document.querySelector('#arrayIndexes');
  appendStructuredArray(ulHtmlElement, arrayIndexStructure)
};

function appendStructuredArray(nodeList, structuredArray) {
  centralize(nodeList, structuredArray);
  structuredArray.forEach((element) => {
    nodeList.append(element);
  });
};

function getItemsList() {
  return document.querySelectorAll('#array li');
};

function render(numbersToBeSorted) {
  const ulHtmlElementArray = document.querySelector('#array');
  ulHtmlElementArray.innerText = '';

  const ulHtmlElementIndexes = document.querySelector('#arrayIndexes');
  ulHtmlElementIndexes.innerText = '';

  const structedArrayHtml = createStructuredArray(numbersToBeSorted);
  appendStructuredArray(ulHtmlElementArray, structedArrayHtml);
};

export default {
  createStructuredArray,
  appendStructuredArray,
  getItemsList,
  render
};