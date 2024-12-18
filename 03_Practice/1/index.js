class Card {
  constructor(cardNumber, balance) {
      this.cardNumber = cardNumber;
      this.balance = balance;
  }
  getCardNumber(){
    return this.cardNumber;
  }
  getBalance(){
      return this.balance;
  }
  setBalance(newBalance){
      this.balance = newBalance;
  }

}

class ATM {
  constructor() {
      this.cardInserted = false;
      this.currentCard = null; // Ссылка на текущую вставленную карту
  }

  insertCard(card) {
      if (this.cardInserted) {
          console.log("Ошибка: Карта уже вставлена.");
          return;
      }
      this.currentCard = card;
      this.cardInserted = true;
      console.log(`Карта № ${card.getCardNumber()} вставлена.`);
  }

  removeCard() {
    if (!this.cardInserted) {
      console.log("Ошибка: Карта не вставлена.");
      return;
    }
    this.currentCard = null;
    this.cardInserted = false;
    console.log("Карта извлечена.");
  }

  checkBalance() {
      if (!this.cardInserted) {
          console.log("Операция отклонена. Карта не вставлена.");
          return;
      }
      console.log(`Баланс карты: ${this.currentCard.getBalance()} рублей.`);
  }

  processTransaction(amount) {
      if (!this.cardInserted) {
          console.log("Операция отклонена. Карта не вставлена.");
          return;
      }

      if (amount <= this.currentCard.getBalance()) {
          this.currentCard.setBalance(this.currentCard.getBalance() - amount);
          console.log(`Операция выполнена. Снято ${amount} рублей.`);
          console.log(`Новый баланс: ${this.currentCard.getBalance()} рублей.`);

      } else {
          console.log("Операция отклонена. Недостаточно средств на карте.");
      }
  }
  showMenu() {
    console.log("\nВыберите действие:");
    console.log("1. Вставить карту");
    console.log("2. Снять деньги");
    console.log("3. Посмотреть баланс");
    console.log("4. Извлечь карту");
    console.log("5. Выход");
  }

   run() {
      let choice;
      while (choice !== 5) {
          this.showMenu();
          choice = parseInt(prompt("Введите номер действия:"));

          switch (choice) {
              case 1:
                  if (!this.cardInserted) {
                      const cardNumber = prompt("Введите номер карты:");
                      const card = new Card(cardNumber, 500); // <-- Вот исправление
                      this.insertCard(card);
                  } else {
                      console.log("Карта уже вставлена.");
                  }
                  break;
              case 2:
                  if (this.cardInserted) {
                      let amount = parseInt(prompt("Введите сумму для снятия:"));
                      this.processTransaction(amount);
                  } else {
                      console.log("Операция отклонена. Карта не вставлена.");
                  }
                  break;
              case 3:
                  this.checkBalance();
                  break;
              case 4:
                  this.removeCard();
                  break;
              case 5:
                  console.log("Выход из программы.");
                  break;
              default:
                  console.log("Неверный ввод.");
          }
      }
  }
}

// Пример работы
const atm = new ATM();
atm.run();