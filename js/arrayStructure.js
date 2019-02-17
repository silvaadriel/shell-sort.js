function createArrayStructure(array) {
  const squareSize = 70;
  const newArray = array.map((element, i) => {
    const liElement = document.createElement('li');
    liElement.innerText = element;
    liElement.style.left = `${squareSize * i}px`;
    return liElement;
  });
  return newArray;
}

function centralize(nodeList, array) {
  nodeList.style.marginLeft = `-${(70 * array.length) / 2}px`;
}

function appendArrayStructure(nodeList, array) {
  centralize(nodeList, array);
  array.forEach((element) => {
    nodeList.append(element);
  })
}

export default {
  createArrayStructure,
  appendArrayStructure
}
