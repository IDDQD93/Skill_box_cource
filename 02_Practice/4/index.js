function getUserData() {
    const userName = prompt("Введите имя пользователя:");
    const birthYear = parseInt(prompt("Введите год рождения пользователя:"));
  

    if (isNaN(birthYear) || birthYear < 0 || birthYear > new Date().getFullYear()) {
      console.error("Ошибка ввода. Пожалуйста, введите корректный год рождения (число).");
      return null; 
    }
  
    return { name: userName, birthYear };
  }
  
  function calculateAverageAge(users) {
    let sumOfAges = 0;
    for (const user of users) {
      if (user) { 
        const currentYear = new Date().getFullYear();
        const age = currentYear - user.birthYear;
        sumOfAges += age;
      }
    }
    return sumOfAges / users.length; 
  }
  
  
  
  const users = [];
  
  for (let i = 0; i < 3; i++) {
    const userData = getUserData();
    if (userData) { 
      users.push(userData);
    } else {
      
      i--; 
    }
  }
  
  console.log("Список пользователей:");
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const currentYear = new Date().getFullYear();
    const age = currentYear - user.birthYear;
    console.log(`${i + 1} '${user.name}' ${age}`);
  }
  
  const averageAge = calculateAverageAge(users);
  console.log(`Средний возраст пользователей: ${averageAge}`);