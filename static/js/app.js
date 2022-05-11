// {li class="list-group-item active">Active item</li>}
// {<li class="list-group-item">Item</li> -->}

let form = document.querySelector('#todoForm');
let ul = document.querySelector('#todoList');
let clear = document.querySelector('#delete-list');

// console.log(form)

form.addEventListener('submit', e => {
    e.preventDefault();

    let li = document.createElement('li');

    li.classList.add('list-group-item');

    li.innerText = e.target.todoItemInput.value;

    li.addEventListener('mouseenter', (e) => li.classList.add('active'));
    
    li.addEventListener('mouseleave', (e) => li.classList.remove('active'));
    
    li.addEventListener('click', (e) => {
        li.classList.remove('active');
        li.classList.add('disabled');
        li.style.textDecoration = 'line-through'
        li.classList.textDecoration.toggle = 'none';
    })
        
    ul.appendChild(li)
})

clear.addEventListener('delete-list', e => {
            e.preventDefault();
        li.classList.remove('list-group-item')

    e.target.todoItemInput.value = '';
})

