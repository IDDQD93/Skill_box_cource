let products = ["Молоко", "Хлеб", "Яйца", "Сыр", "Фрукты"];

const productList = document.querySelector("#product-list");
const addProductBtn = document.querySelector("#add-product-btn");


// Функция для сортировки массива и отображения списка товаров в DOM
function renderProducts() {
    products.sort(); // Сортировка массива по возрастанию
    productList.innerHTML = ""; // Очищаем предыдущие элементы
    products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = product;
        productList.appendChild(listItem);
    });
}


// Функция для добавления нового товара
function addProduct() {
    const newProduct = prompt("Введите название нового товара:");

    if (newProduct === null || newProduct.trim() === "") {
        alert("Название товара не введено!");
        return;
    }

    products.push(newProduct);
    renderProducts();
}


// Обработчики событий
addProductBtn.addEventListener("click", addProduct);

// Вызываем начальное отображение списка товаров
renderProducts();