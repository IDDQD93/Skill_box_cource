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
        this._name = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
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

export class EditDelivery extends Delivery {
    constructor(name, address, distance, status) {
        super(name, address, distance);
        this._status = status;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    createCard(index) {
        const card = super.createCard();
        card.classList.add(this._status);
        const editButton = document.createElement('button');
         editButton.textContent = "Изменить";
        editButton.addEventListener('click', () => this.openEditModal(index, card));
        card.appendChild(editButton);
        return card;
    }
    openEditModal(index, card) {
      const modal = document.createElement('div');
        modal.classList.add('edit-modal');
      modal.innerHTML = `
          <div class="edit-modal-content">
             <h2>Редактировать доставку</h2>
             <label for="editName">Имя</label>
              <input type="text" id="editName" value="${this.name}">
               <label for="editAddress">Адрес</label>
               <input type="text" id="editAddress" value="${this.address}">
               <label for="editDistance">Расстояние</label>
              <input type="number" id="editDistance" value="${this.distance}">
               <label for="editStatus">Статус</label>
                <select id="editStatus">
                  <option value="delivery" ${this.status === "delivery" ? "selected" : ""}>Доставляется</option>
                 <option value="delivered" ${this.status === "delivered" ? "selected" : ""}>Доставлен</option>
                  <option value="canceled" ${this.status === "canceled" ? "selected" : ""}>Отменен</option>
            </select>
               <button>Сохранить</button>
          </div>
      `;
       document.body.appendChild(modal);
        modal.style.display = 'flex'

       const saveButton = modal.querySelector('button');
        saveButton.addEventListener('click', () => {
              const editNameInput = modal.querySelector("#editName");
              const editAddressInput = modal.querySelector("#editAddress");
             const editDistanceInput = modal.querySelector("#editDistance");
              const editStatusSelect = modal.querySelector("#editStatus");

             this.name = editNameInput.value;
            this.address = editAddressInput.value;
           this.distance = parseFloat(editDistanceInput.value);
            this.status = editStatusSelect.value;

           card.className = 'delivery-card ' + this.status;
           card.innerHTML = `
              <h2><span>Имя</span><br> ${this.name}</h2>
              <p><span>Адрес</span><br> ${this.address}</p>
             <p><span>Расстояние</span><br> ${this.distance} км</p>
             <button>Изменить</button>
              `;

            const editButton = card.querySelector('button');
              editButton.addEventListener('click', () => this.openEditModal(index, card));
            modal.remove();
           })
        modal.addEventListener('click', (e) => {
          if(e.target === modal) {
             modal.remove()
          }
        })
    }
}