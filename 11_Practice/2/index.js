document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');
    
    productForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const productNameInput = document.getElementById('productName');
        const productWeightInput = document.getElementById('productWeight');
        const deliveryDistanceInput = document.getElementById('deliveryDistance');

         const productNameError = document.getElementById('productNameError')
         const productWeightError = document.getElementById('productWeightError')
        const deliveryDistanceError = document.getElementById('deliveryDistanceError')

        let isValid = true;

        if (productNameInput.value.trim() === '') {
            productNameError.textContent = 'Название товара не может быть пустым'
            isValid = false
        } else {
            productNameError.textContent = ''
        }
        if (productWeightInput.value <= 0) {
            productWeightError.textContent = 'Вес должен быть больше нуля'
            isValid = false
        }else {
          productWeightError.textContent = ''
        }
        if (deliveryDistanceInput.value <= 0) {
            deliveryDistanceError.textContent = 'Расстояние должно быть больше нуля'
           isValid = false
        } else {
            deliveryDistanceError.textContent = ''
        }

        if (isValid) {
              const productName = productNameInput.value;
            const productWeight = parseFloat(productWeightInput.value);
            const deliveryDistance = parseFloat(deliveryDistanceInput.value);
            const deliveryCost = (productWeight * deliveryDistance) / 10;
      
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${productName}</td>
                <td>${productWeight.toFixed(2)}</td>
                <td>${deliveryDistance.toFixed(2)}</td>
                <td>${deliveryCost.toFixed(2)}</td>
            `;
            productList.appendChild(newRow);

           productForm.reset();
       }

    });
});