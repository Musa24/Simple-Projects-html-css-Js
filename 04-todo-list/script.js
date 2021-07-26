const form = document.querySelector('form');
const itemsContainer = document.querySelector('.todos-items');
const icons = document.querySelectorAll('.far');
const input = document.querySelector('input');
const clearBtn = document.querySelector('.clear-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    creatingElemet(input.value);
  }
  input.value = '';
});
function creatingElemet(inputValue) {
  const itemContainer = document.createElement('div');
  const item = document.createElement('div');
  const icons = document.createElement('div');

  itemContainer.classList.add('item');
  item.innerText = inputValue;
  //   Icons
  icons.classList.add('todo-icons');
  icons.innerHTML = `<a href="#">
      <i class="far fa-check-circle"></i>
     </a>
     <a href="#">
       <i class="far fa-edit"></i>
     </a>
     <a href="#">
       <i class="far fa-trash-alt"></i>
     </a>`;
  itemContainer.appendChild(item);
  itemContainer.appendChild(icons);
  const icns = itemContainer.querySelectorAll('.far');

  itemsContainer.appendChild(itemContainer);
  showingClearBtn();

  //   Deleting
  icns.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      const icn = e.target;
      typeOfIcon = icn.getAttribute('class');
      //   deleting
      if (typeOfIcon.includes('fa-trash-alt')) {
        icn.parentElement.parentElement.parentElement.remove();
        // class - show
        showingClearBtn();
      }
      //   Checking
      if (typeOfIcon.includes('fa-check-circle')) {
        icn.parentElement.parentElement.parentElement.classList.toggle(
          'todo-done'
        );
      }
      //   Editing
      if (typeOfIcon.includes('fa-edit')) {
        const value = icn.parentElement.parentElement.previousSibling.innerText;
        input.value = value;
        icn.parentElement.parentElement.parentElement.remove();
      }
    });
  });
}

// clearing button

clearBtn.addEventListener('click', () => {
  [...itemsContainer.children].forEach((item) => {
    item.remove();
  });
  showingClearBtn();
});

function showingClearBtn() {
  if (itemsContainer.children.length <= 0) {
    clearBtn.classList.add('show');
  } else {
    clearBtn.classList.remove('show');
  }
}
