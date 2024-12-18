
// Исходный массив с книгами
const books = ["1984", "Война и мир", "Гарри Поттер", "Преступление и наказание"];

// Функция для отображения списка книг
function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; // Очищаем текущий список

    books.forEach((book, index) => {
        const li = document.createElement("li");
        li.textContent = book;
        li.dataset.index = index; // Добавляем индекс книги
        li.classList.remove("highlight"); // Снимаем подсветку при перерисовке
        bookList.appendChild(li);
    });
}

// Функция для добавления новой книги
function addBook() {
    const newBook = prompt("Введите название новой книги:");

    if (newBook && newBook.trim() !== "") {
        books.push(newBook.trim()); // Добавляем книгу в массив
        displayBooks(); // Перерисовываем список книг
    } else {
        alert("Название книги не введено!");
    }
}

// Функция для поиска книги
function searchBook() {
    const searchQuery = prompt("Введите название книги для поиска:");

    if (searchQuery && searchQuery.trim() !== "") {
        const bookList = document.querySelectorAll("#book-list li");
        let bookFound = false;

        bookList.forEach(li => {
            if (li.textContent.toLowerCase() === searchQuery.trim().toLowerCase()) {
                li.classList.add("highlight"); // Подсветка найденной книги
                bookFound = true;
            } else {
                li.classList.remove("highlight"); // Снимаем подсветку с остальных
            }
        });

        if (!bookFound) {
            alert("Книга не найдена!");
        }
    } else {
        alert("Название книги для поиска не введено!");
    }
}

// Подключаем функции к кнопкам
document.getElementById("add-book").addEventListener("click", addBook);
document.getElementById("search-book").addEventListener("click", searchBook);

// Начальное отображение списка книг
displayBooks();