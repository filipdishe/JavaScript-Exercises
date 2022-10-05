'use strict';

const btnCheck = document.querySelector('.btn');
const inputEl = document.querySelector('.input-field');

btnCheck.addEventListener('click', function () {
  const userInput = inputEl.value;

  let vowelCounter = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (
      userInput[i] === 'a' ||
      userInput[i] === 'e' ||
      userInput[i] === 'i' ||
      userInput[i] === 'o' ||
      userInput[i] === 'u'
    ) {
      vowelCounter++;
    }
  }

  alert(`There are ${vowelCounter} vowels!`);
  inputEl.value = '';
});
