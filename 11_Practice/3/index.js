document.addEventListener('DOMContentLoaded', function() {
    const cardText = document.getElementById('cardText');
    const cardColor = document.getElementById('cardColor');
    const cardPreview = document.getElementById('card');

     cardText.addEventListener('input', function() {
         cardPreview.textContent = this.value;
    });

      cardText.addEventListener('focus', function() {
         this.style.border = '2px solid #007bff';
         this.style.backgroundColor = '#f0f8ff'
    });

     cardText.addEventListener('blur', function() {
        this.style.border = '1px solid #ccc';
        this.style.backgroundColor = '#fff'
    });

    cardColor.addEventListener('change', function() {
         cardPreview.style.backgroundColor = this.value;
    });
});