const totalSum = () => {
    let priceItem = parseFloat(prompt("Введите цену товара:"));
    let amountItem = parseInt(prompt("Введите количество товара:"));
    let discountItem = parseFloat(prompt("Введите скидку в процентах:"));
      // Проверка на корректность ввода
      if (isNaN(priceItem) || isNaN(amountItem) || isNaN(discountItem)) {
          console.log("Ошибка: Введены некорректные значения. Пожалуйста, введите числа.");
          return;
      }
  
  
    // Рассчитываем полную стоимость товара без скидки
    const totalCost = priceItem * amountItem;
  
    // Рассчитываем размер скидки в денежном выражении
    const discountAmount = totalCost * (discountItem / 100);
  
    // Рассчитываем итоговую стоимость со скидкой
    const finalCost = totalCost - discountAmount;
  
    // Выводим итоговую стоимость со скидкой в консоль
    console.log(`Итоговая стоимость со скидкой: ${finalCost}`);
  };
  
  
  // Вызываем функцию для запуска
  totalSum();