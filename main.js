import './style.css';

const list = document.getElementById('list');

const input = document.getElementById('textField');
const btnId = document.getElementById('add');

function handleClick () {
  const value = input.value;

  const newListItem = document.createElement('li');
  newListItem.className = 'listItem';
  newListItem.innerHTML = value;

  list.appendChild(newListItem);
}

btnId.addEventListener('click', handleClick);
