document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const removeButton = document.getElementById('removeButton');
    const dynamicList = document.getElementById('dynamicList');

    addButton.addEventListener('click', function() {
        const newListItem = document.createElement('li');
        newListItem.textContent = 'Новый элемент списка';
        dynamicList.appendChild(newListItem);
    });

     removeButton.addEventListener('click', function() {
        const lastListItem = dynamicList.lastElementChild;
         if (lastListItem) {
          dynamicList.removeChild(lastListItem)
       }
    });

});