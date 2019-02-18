import startSorting from './sort.js';
import structureArray from './arrayStructure.js';
import { numbersToBeSorted } from './numbersToBeSorted.js'

const ulHtmlElement = document.querySelector('#array');

const structedArrayHtml = structureArray.createStructuredArray(numbersToBeSorted());

structureArray.appendStructuredArray(ulHtmlElement, structedArrayHtml);

const itemsList = document.querySelectorAll('#array li');

startSorting(numbersToBeSorted(), itemsList);
