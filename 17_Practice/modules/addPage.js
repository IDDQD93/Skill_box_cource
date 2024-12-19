import { getItems, deleteItem } from './storage.js';

export function renderListPage(app, switchPage) {
    const items = getItems();

    const title = document.createElement('h1');
    title.textContent = 'Склад';

    const addButton = document.createElement('button');
    addButton.textContent = 'Добавить запись';
    addButton.onclick = () => switchPage('add');

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Заголовки таблицы
    const headers = ['Название', 'Полка', 'Вес', 'Время хранения', 'Действия'];
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Содержимое таблицы
    items.forEach((item, index) => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = () => {
            deleteItem(index);
            renderListPage(app, switchPage); // Перерисовка страницы
        };

        const actionTd = document.createElement('td');
        actionTd.appendChild(deleteButton);
        row.appendChild(actionTd);

        tbody.appendChild(row);
    });

    app.appendChild(title);
    app.appendChild(addButton);
    app.appendChild(table);
}


export function renderAddPage(container, switchPage) {
  container.innerHTML = `
      <h1>Добавить запись</h1>
      <form id="addForm">
          <div>
              <label for="name">Название:</label>
              <input type="text" id="name" name="name" required>
          </div>
          <div>
              <label for="shelf">Полка:</label>
              <input type="text" id="shelf" name="shelf" required>
          </div>
          <div>
              <label for="weight">Вес:</label>
              <input type="number" id="weight" name="weight" min="0" required>
          </div>
          <div>
              <label for="storageTime">Время хранения:</label>
              <input type="text" id="storageTime" name="storageTime" required>
          </div>
          <button type="submit">Добавить</button>
      </form>
      <button id="backToList">Вернуться к списку</button>
  `;

  // Обработчик отправки формы
  const form = document.getElementById('addForm');
  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = {
          name: form.name.value,
          shelf: form.shelf.value,
          weight: form.weight.value,
          storageTime: form.storageTime.value,
      };

      // Добавляем данные в localStorage
      const storage = JSON.parse(localStorage.getItem('warehouse')) || [];
      storage.push(data);
      localStorage.setItem('warehouse', JSON.stringify(storage));

      // Возвращаемся к списку
      switchPage('list');
  });

  // Обработчик кнопки "Вернуться к списку"
  document.getElementById('backToList').addEventListener('click', () => {
      switchPage('list');
  });
}