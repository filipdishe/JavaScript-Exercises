'use strict';

// Buttons
const btnAddNote = document.querySelector('.btn-add');
const btnCloseModal = document.querySelector('.close-modal');

// Elements
const inputEl = document.querySelector('.input-textarea');
const notesContainer = document.querySelector('.notes-box');

// Modal elements
const modalContainer = document.querySelector('.modal-container');
const modalTextEl = document.querySelector('.modal-text');

// //////////////////////////////////////////////
// Event handlers
btnAddNote.addEventListener('click', function () {
  // 1. Taking the user input
  const userInput = inputEl.value;

  //   2. Cutting the user input to display to notes box
  const slicedUserInput = userInput.slice(0, 70);

  // .3 Guard clause if user input is empty dont add note-box
  if (userInput === '') return;

  // 4. Displaying the sliced input in notes box
  notesContainer.insertAdjacentHTML(
    'beforeend',
    `
        <div class="note-box">
          <h2 class="note-heading">Note</h2>
          <p class="hidden-fullnote" style="display: none">${userInput}</p>
          <p class="note-text">
          ${slicedUserInput}
          ${slicedUserInput.length >= 70 ? '...' : ''}
          </p>
          <button class="btn btn-view">View Detail</button>
        </div>
  `
  );

  // 5. Clearing the input textarea field
  inputEl.value = '';
});

// Implemented with Event Delegation becuse the button is created dinamically
// Adding the modal window with the full text that user has inserted
notesContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-view')) {
    // note variable is taking the text in .hidden-fullnote paragraph with DOM traversing (.hidden-fullnote has a purpose only to store the whole string of the note IT IS NOT displayed in the UI)
    const note = e
      .composedPath()[1]
      .querySelector('.hidden-fullnote').textContent;
    modalTextEl.textContent = note;

    modalContainer.classList.add('show');
  }
});

// Closing the modal
btnCloseModal.addEventListener('click', function () {
  modalContainer.classList.remove('show');
});
