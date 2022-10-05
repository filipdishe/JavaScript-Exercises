'use strict';
// Buttons
const btnExpense = document.querySelector('.btn');
// This button below is dinmaicaly created from the js
const btnTable = document.querySelector('.table-btn');

// Inputs
const nameInputEl = document.querySelector('.input-name');
const dateInputEl = document.querySelector('.input-date');
const amountInputEl = document.querySelector('.input-amount');

// Table
const tableBody = document.querySelector('.tbody');
const noExpensesEl = document.querySelector('.no-expenses-tr');
const noExpenseTd = document.querySelector('.no-expenses-td');

btnExpense.addEventListener('click', function (e) {
  e.preventDefault();

  //   1. Taking the data from the input fields
  const nameInput = nameInputEl.value;
  const dateInput = dateInputEl.value;
  const amountInput = Number(amountInputEl.value);

  //   Guard clause (User must fill all of the input fields)
  if (nameInput === '' || dateInput === '')
    return alert('You must fill all of the input fields!');

  //   2. Input in the amount field must be positive number
  if (amountInput && amountInput > 0) {
    //1. Deleting 'no expenses' row after inserting data from inputs
    noExpensesEl.style.display = 'none';

    // 2. Inserting data from inputs into the table
    tableBody.insertAdjacentHTML(
      'beforeend',
      `
        <tr>
            <td>${nameInput}</td>
            <td>${dateInput}</td>
            <td>$${amountInput}</td>
            <td><button class="table-btn" style="padding: 4px">X</button></td>
        </tr>
    `
    );

    // 3. Clearing input fields after clicking add expense
    nameInputEl.value = '';
    dateInputEl.value = '';
    amountInputEl.value = '';
  } else {
    alert('You need to enter positive number in the Amount field!!');
  }
});

// Implemented with Event Delegation
// Clicking on the dynamically created button for deleting a row in the table!
tableBody.addEventListener('click', function (e) {
  // 1. Selecting the delete button (X)
  if (e.target.classList.contains('table-btn')) {
    // 2.Deleting the table row with DOM travesring
    e.composedPath()[2].remove();

    // 3. When you delete all rows "no expenses should appear again"
    if (tableBody.children.length === 1) {
      noExpensesEl.style.display = 'inline-block';
    }
  }
});
