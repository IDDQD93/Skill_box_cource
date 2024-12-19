function createCar(additionalProperties) {
    // Объект автомобиля с базовыми свойствами
    const car = {
      wheels: 4,
      doors: 4,
      isStarted: false,
    };
  
    // Объединяем базовый объект с переданным объектом
    return { ...car, ...additionalProperties };
  }
  
  // Пример использования функции
  console.log(createCar({ name: 'Haval', hp: 198 }));