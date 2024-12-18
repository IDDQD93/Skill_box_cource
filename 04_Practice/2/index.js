function celsiusToFahrenheit() {
    let celsius = parseFloat(prompt("Введите температуру в градусах Цельсия:"));
  
      if (isNaN(celsius)) {
          console.log("Ошибка: Введено некорректное значение. Пожалуйста, введите число.");
          return;
      }
  
    const fahrenheit = celsius * 1.8 + 32;
    console.log(`Температура в градусах Фаренгейта: ${fahrenheit}`);
  }
  
  function fahrenheitToCelsius() {
    let fahrenheit = parseFloat(prompt("Введите температуру в градусах Фаренгейта:"));
  
     if (isNaN(fahrenheit)) {
         console.log("Ошибка: Введено некорректное значение. Пожалуйста, введите число.");
         return;
     }
  
  
    const celsius = (fahrenheit - 32) / 1.8;
    console.log(`Температура в градусах Цельсия: ${celsius}`);
  }
  
  
  // Вызываем функции для запуска
  celsiusToFahrenheit();
  fahrenheitToCelsius();