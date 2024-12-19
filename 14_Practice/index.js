// Глобальная переменная для отслеживания индекса редактируемого фильма
let currentEditIndex = null;

// Функция для отображения фильмов в таблице
function renderMovies() {
    let movies = JSON.parse(localStorage.getItem('movies')) || []; // Получаем данные из localStorage
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Очищаем таблицу перед отрисовкой

    movies.forEach((movie, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>${movie.year}</td>
                <td>${movie.watched ? 'Да' : 'Нет'}</td>
                <td>
                    <button onclick="editMovie(${index})">Редактировать</button>
                    <button onclick="deleteMovie(${index})">Удалить</button>
                </td>
            </tr>
        `;
    });
}

// Функция для добавления нового фильма
function addMovie() {
    const title = document.getElementById('title').value.trim();
    const genre = document.getElementById('genre').value.trim();
    const year = document.getElementById('year').value.trim();
    const watched = document.getElementById('watched').checked;

    // Валидация: проверяем, что все поля заполнены
    if (!title || !genre || !year) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    let movies = JSON.parse(localStorage.getItem('movies')) || []; // Загружаем фильмы из localStorage
    movies.push({ title, genre, year, watched }); // Добавляем новый фильм
    localStorage.setItem('movies', JSON.stringify(movies)); // Сохраняем в localStorage
    clearForm();
    renderMovies(); // Перерисовываем таблицу
}

// Функция для очистки формы
function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('year').value = '';
    document.getElementById('watched').checked = false;
    currentEditIndex = null; // Сбрасываем индекс редактирования
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('update-btn').style.display = 'none';
}

// Функция для удаления фильма
function deleteMovie(index) {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.splice(index, 1); // Удаляем фильм по индексу
    localStorage.setItem('movies', JSON.stringify(movies)); // Сохраняем изменения
    renderMovies(); // Перерисовываем таблицу
}

// Функция для заполнения формы при редактировании фильма
function editMovie(index) {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    const movie = movies[index];

    // Заполняем форму данными выбранного фильма
    document.getElementById('title').value = movie.title;
    document.getElementById('genre').value = movie.genre;
    document.getElementById('year').value = movie.year;
    document.getElementById('watched').checked = movie.watched;

    currentEditIndex = index; // Сохраняем индекс фильма, который редактируем
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('update-btn').style.display = 'block';
}

// Функция для обновления фильма
function updateMovie() {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];

    // Обновляем данные фильма по индексу
    movies[currentEditIndex] = {
        title: document.getElementById('title').value.trim(),
        genre: document.getElementById('genre').value.trim(),
        year: document.getElementById('year').value.trim(),
        watched: document.getElementById('watched').checked
    };

    localStorage.setItem('movies', JSON.stringify(movies)); // Сохраняем обновлённые данные
    clearForm();
    renderMovies(); // Перерисовываем таблицу
}

// Функция для сортировки фильмов
function sortMovies() {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    const criteria = document.getElementById('sort-criteria').value; // Получаем критерий сортировки
// Сортировка по выбранному критерию
movies.sort((a, b) => {
    if (a[criteria] > b[criteria]) return 1;
        if (a[criteria] < b[criteria]) return -1;
        return 0;
    });

    localStorage.setItem('movies', JSON.stringify(movies)); // Сохраняем отсортированные данные
    renderMovies(); // Перерисовываем таблицу
}

// Инициализация: отображаем фильмы при загрузке страницы
window.onload = function () {
    renderMovies();
};