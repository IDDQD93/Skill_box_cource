import { getItems, deleteItem } from './storage.js';

export function renderListPage(container, switchPage) {
  const storage = JSON.parse(localStorage.getItem('warehouse')) || [];

  container.innerHTML = `
      <h1>Список вещей</h1>
      <button id="addNew">Добавить запись</button>
      <table>
          <thead>
              <tr>
                  <th>Название</th>
                  <th>Полка</th>
                  <th>Вес</th>
                  <th>Время хранения</th>
                  <th>Действия</th>
              </tr>
          </thead>
          <tbody>
              ${storage
                  .map(
                      (item, index) => `
                      <tr>
                          <td>${item.name}</td>
                          <td>${item.shelf}</td>
                          <td>${item.weight}</td>
                          <td>${item.storageTime}</td>
                          <td><button data-index="${index}" class="delete">Удалить</button></td>
                      </tr>
                  `
                  )
                  .join('')}
          </tbody>
      </table>
  `;

  // Переход на страницу добавления записи
  document.getElementById('addNew').addEventListener('click', () => {
      switchPage('add');
  });

  // Удаление записи
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button) => {
      button.addEventListener('click', () => {
          const index = button.dataset.index;
          storage.splice(index, 1);
          localStorage.setItem('warehouse', JSON.stringify(storage));
          renderListPage(container, switchPage);
      });
  });
}