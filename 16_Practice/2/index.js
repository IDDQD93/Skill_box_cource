function greeting() {
    const username = prompt("Введите имя пользователя");
      if (!username || username.trim() === "") {
          throw new Error("Имя обязательно для заполнения");
      }
    console.log(`Привет, ${username}!`);
  }
  try { 
    greeting();
  } catch(error) { 
    alert(error.message);
  }