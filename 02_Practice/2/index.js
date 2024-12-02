// Добавьте возможность ввода данных товаров с клавиатуры, используя окно ввода prompt().
// Выведете в консоль сумму всей покупки.

let product1 = "Молоко" // Название товара 1
let price1 = 75 // Стоимость товара  1
let count1 = 1 // Количесто товара 1

console.log(product1, price1 * count1) // Вывод в консоль

let product2 = "Кофе" // Название товара 2
let price2 = 420  // Стоимость товара  2
let count2 = 1 // Количесто товара 2

console.log(product2, price2 * count2) // Вывод в консоль

let product3 = "Яблоки" // Название товара 3
let price3 = 160 // Стоимость товара  3
let count3 = 1 // Количесто товара 3

console.log(product3, price3 * count3) 

let totalCost = 0; 


function getProductData() {
  const productName = prompt("Введите название товара:");
  const productPrice = parseFloat(prompt("Введите стоимость товара:"));
  const productCount = parseInt(prompt("Введите количество товара:"));

    if (productName && !isNaN(productPrice) && !isNaN(productCount) && productPrice >=0 && productCount >= 0) {
    const cost = productPrice * productCount;
    console.log(productName, cost);
    return cost;
  } else {
    console.error("Ошибка ввода данных. Пожалуйста, введите числовые значения для цены и количества.");
    return 0; 
  }
}


totalCost += getProductData();
totalCost += getProductData();
totalCost += getProductData();


console.log("\nОбщая стоимость покупки:", totalCost);