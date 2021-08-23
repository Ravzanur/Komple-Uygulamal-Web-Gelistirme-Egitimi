//UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

//call event listeners
eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener('submit', addNewItem);

    //delete an item
    taskList.addEventListener('click', deleteItem);

    //delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

//add new item
function addNewItem(e) {

    if (input.value === '') {
        alert('add new item');
    }

    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));


    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);

    taskList.appendChild(li);

    input.value = ' ';

    e.preventDefault();
}


function deleteItem(e) {

    if (confirm('are you sure??')) {
        if (e.target.className == 'fas fa-times') {
            e.target.parentElement.parentElement.remove();

        }

    }

    e.preventDefault();

}

function deleteAllItems(e) {

    if (confirm('are you sure??')) {
        //taskList.innerHTML = ' ';

        taskList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
            }

        });

    }



    e.preventDefault();

}
