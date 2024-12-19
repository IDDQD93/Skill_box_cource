document.addEventListener('DOMContentLoaded', function() {
    const giftArr = [
        {
            title: "Скидка 20% на первую покупку в нашем магазине!",
            icon: "https://skillbox.ru/media/module_files/javascript_2_0_skillbox_module_17/img/discount.svg"
        },
        {
            title: "Скидка 10% на всё!",
             icon: "https://skillbox.ru/media/module_files/javascript_2_0_skillbox_module_17/img/discount_2.svg"
        },
        {
            title: "Подарок при первой покупке в нашем магазине!",
            icon: "https://skillbox.ru/media/module_files/javascript_2_0_skillbox_module_17/img/gift.svg"
        },
        {
            title: "Бесплатная доставка для вас!",
             icon: "https://skillbox.ru/media/module_files/javascript_2_0_skillbox_module_17/img/delivery.svg"
        },
        {
            title: "Сегодня день больших скидок!",
             icon: "https://skillbox.ru/media/module_files/javascript_2_0_skillbox_module_17/img/discount_3.svg"
        }
    ];

    const popupContainer = document.getElementById('popup-container');

    setTimeout(function() {
        const randomIndex = Math.floor(Math.random() * giftArr.length);
        const selectedGift = giftArr[randomIndex];

        const popupCard = document.createElement('div');
        popupCard.classList.add('popup-card');
        popupCard.innerHTML = `
            <img src="${selectedGift.icon}" alt="Подарок">
            <h2>${selectedGift.title}</h2>
            <button>Отлично!</button>
        `;
        popupContainer.appendChild(popupCard);

        const closeButton = popupCard.querySelector('button');
        closeButton.addEventListener('click', function() {
            popupContainer.removeChild(popupCard);
        });
    }, 3000);
});