export class Delivery {
    constructor(name, address, distance) {
        this._name = name;
        this._address = address;
        this._distance = distance;
    }

     get name() {
       return this._name;
   }

    set name(value) {
       this._name = value
   }

    get address() {
       return this._address;
   }

     set address(value) {
      this._address = value
     }
    get distance() {
        return this._distance;
    }

    set distance(value) {
       this._distance = value;
    }
    createCard() {
        const card = document.createElement('div');
        card.classList.add('delivery-card');
        card.innerHTML = `
            <h2><span>Имя</span><br> ${this._name}</h2>
            <p><span>Адрес</span><br> ${this._address}</p>
            <p><span>Расстояние</span><br> ${this._distance} км</p>
        `;
        return card;
    }
}