function average() {
    // Запрашиваем ввод трех чисел от пользователя
    let num1 = parseFloat(prompt("Введите первое число:"));
    let num2 = parseFloat(prompt("Введите второе число:"));
    let num3 = parseFloat(prompt("Введите третье число:"));
  
     // Проверяем, что все вводы - числа
      if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
          console.log("Ошибка: Введены некорректные значения. Пожалуйста, введите числа.");
          return;
      }
  
  
    // Вычисляем сумму трех чисел
    const sum = num1 + num2 + num3;
  
    // Вычисляем среднее арифметическое
    const avg = sum / 3;
  
    // Выводим среднее арифметическое в консоль
    console.log(`Среднее арифметическое: ${avg}`);
  }
  
  // Вызываем функцию для запуска
  average();