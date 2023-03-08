// SELECTORS

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todos = document.querySelector('#todos');

// EVENTS

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoText = input.value;
    if (todoText) {
        const todoEl = document.createElement('li');
        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
        })

        todos.append(todoEl);
        input.value = '';
    }
})