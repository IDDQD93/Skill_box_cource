document.addEventListener('DOMContentLoaded', function() {
    const promoForm = document.getElementById('promoForm');
    const promoCodeInput = document.getElementById('promoCode');
    const promoMessage = document.getElementById('promoMessage');

    const promocodeArr = [
        {
            promocode: 'PROM10',
            gift: "Скидка 10%"
        },
        {
            promocode: 'PROM50',
            gift: "Скидка 50%"
        },
        {
            promocode: 'GIFT',
            gift: "Подарок в корзине"
        }
    ];
    
    function getCookie() {
        return document.cookie.split('; ').reduce((acc, item) => {
           const [name, value] = item.split('=')
            acc[name] = value
           return acc
      }, {});
    }

    
    const cookie = getCookie();
     if (cookie.promoCode) {
        promoCodeInput.value = cookie.promoCode;
        const validPromo = promocodeArr.find(promo => promo.promocode === cookie.promoCode);
          if (validPromo) {
           promoForm.classList.add('promo-applied');
            promoMessage.textContent = `Промокод ${cookie.promoCode} активирован! Вы получили: ${validPromo.gift}`;
        }
    }

    promoForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const enteredPromo = promoCodeInput.value;

         const validPromo = promocodeArr.find(promo => promo.promocode === enteredPromo);

         if (validPromo) {
           promoMessage.textContent = `Промокод ${enteredPromo} активирован! Вы получили: ${validPromo.gift}`;
           promoForm.classList.add('promo-applied');
           document.cookie = `promoCode=${enteredPromo}; max-age=${30 * 24 * 60 * 60}`;
       } else {
            promoMessage.textContent = '';
           promoForm.classList.remove('promo-applied');
       }
    });
});