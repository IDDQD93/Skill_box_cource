document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
    const resultDiv = document.getElementById('result');
    const ratingValueOutput = document.getElementById('ratingValue')
    const ratingInput = document.getElementById('rating')

    ratingInput.addEventListener('input', function() {
     ratingValueOutput.textContent = this.value
    })
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');

        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Имя пользователя обязательно для заполнения';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
           emailError.textContent = 'Email обязателен для заполнения';
            isValid = false
        } else if (!emailRegex.test(emailInput.value)) {
           emailError.textContent = 'Неверный формат email';
            isValid = false;
        } else {
           emailError.textContent = '';
        }


        if (isValid) {
            const name = nameInput.value;
            const email = emailInput.value;
            const gender = form.querySelector('input[name="gender"]:checked')?.value || 'Не выбран';
            const rating = form.querySelector('input[name="rating"]').value;
            const interests = Array.from(form.querySelectorAll('input[name="interests"]:checked'))
                .map(checkbox => checkbox.value);
            const comments = document.getElementById('comments').value;


            const resultText = `Имя: ${name}\nEmail: ${email}\nПол: ${gender}\nОценка сервиса: ${rating}\nИнтересы: ${interests.join(', ')}\nКомментарии: ${comments}`;
            resultDiv.textContent = resultText;
           form.reset()
        }
    });
});