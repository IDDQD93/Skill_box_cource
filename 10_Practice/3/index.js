document.addEventListener('DOMContentLoaded', function() {
    const priceList = document.getElementById('priceList');
    const sortAscButton = document.getElementById('sortAsc');
    const sortDescButton = document.getElementById('sortDesc');

    let prices = [100, 500, 250, 750, 300];

    function displayPrices() {
        priceList.innerHTML = '';
        prices.forEach(price => {
            const listItem = document.createElement('li');
            listItem.textContent = price;
            priceList.appendChild(listItem);
        });
    }

    function sortAscending() {
        prices.sort((a, b) => a - b);
        displayPrices();
    }

    function sortDescending() {
        prices.sort((a, b) => b - a);
        displayPrices();
    }

    sortAscButton.addEventListener('click', sortAscending);
    sortDescButton.addEventListener('click', sortDescending);

    displayPrices();
});