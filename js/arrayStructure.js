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
  structuredArray.forEach((element) => {
    nodeList.append(element);
  });
};

function getItemsList() {
  return document.querySelectorAll('#array li');
};

function render(numbersToBeSorted) {
  const ulHtmlElement = document.querySelector('#array');
  ulHtmlElement.innerText = '';

  const structedArrayHtml = createStructuredArray(numbersToBeSorted);
  appendStructuredArray(ulHtmlElement, structedArrayHtml);
};

export default {
  createStructuredArray,
  appendStructuredArray,
  getItemsList,
  render
};