import { EditDelivery } from './modules/delivery.js';

const deliveryArr = [
    new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled")
];

document.addEventListener('DOMContentLoaded', function() {
    const deliveriesContainer = document.getElementById('deliveries');
    const totalDistanceBtn = document.getElementById('totalDistanceBtn');
    const totalDistanceElement = document.getElementById('totalDistance');

    deliveryArr.forEach((delivery, index) => {
        const card = delivery.createCard(index);
        deliveriesContainer.appendChild(card);
    });

    totalDistanceBtn.addEventListener('click', () => {
        const totalDistance = EditDelivery.getTotalDistance(deliveryArr);
        totalDistanceElement.textContent = `Общее расстояние: ${totalDistance} км`;
    });
});