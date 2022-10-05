'use strict';

const submitBtn = document.querySelector('.btn-submit');
const closeBtn = document.querySelector('.btn-close');
const olEl = document.querySelector('.todo-list');
const inputEl = document.querySelector('.input');
const clearListBtn = document.querySelector('.btn-clear-list');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  // 1.Taking the text from input field that the user entered
  const inputValue = inputEl.value;

  // 2. Inserting the text to outer ol element
  if (inputValue != '') {
    olEl.insertAdjacentHTML(
      'beforeend',
      `
        <li>
        ${inputValue} <button class="btn btn-close">X</button
        ><button class="btn btn-done">Done</button>
        </li>
        `
    );
  }

  inputEl.value = '';
});

// Implemented with Evenet Delegation
olEl.addEventListener('click', function (e) {
  // 1. Making the whole list item(li) removes after user clicks on X button
  if (e.target.classList.contains('btn-close')) {
    e.composedPath()[1].remove();
  }
});

olEl.addEventListener('click', function (e) {
  // 1. Ensuring that 'Done' text after the button done appears only once
  if (e.composedPath()[0].nextSibling.innerHTML === 'Done') return;

  // 2. Displaying 'Done' text after some user clicks on done button
  if (e.target.classList.contains('btn-done')) {
    e.composedPath()[0].insertAdjacentHTML(
      'afterend',
      `<p style="display: inline-block">Done</p>`
    );
  }
});

clearListBtn.addEventListener('click', function (e) {
  e.preventDefault();

  olEl.innerHTML = '';
});
