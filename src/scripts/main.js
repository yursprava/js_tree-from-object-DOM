'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

document.body.insertAdjacentHTML('beforeend', '<div id="tree"></div>');

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (Object.keys(data).length === 0) {
    return;
  }

  const ulElement = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const liElement = document.createElement('li');

    liElement.textContent = key;

    ulElement.append(liElement);

    createTree(liElement, value);
  }

  element.append(ulElement);
}

createTree(tree, food);
