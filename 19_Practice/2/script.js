import { EditDelivery } from './modules/delivery.js';

const deliveryArr = [
  new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
  new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled")
];

const deliveriesContainer = document.getElementById('deliveries');

deliveryArr.forEach((delivery, index) => {
    const card = delivery.createCard(index);
    deliveriesContainer.appendChild(card);
});