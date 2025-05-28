document.addEventListener('DOMContentLoaded', () => {
    const showLoginBtn = document.getElementById('showLogin'); // Кнопка "Вхід"
    const showRegisterBtn = document.getElementById('showRegister'); // Кнопка "Реєстрація"
    const loginForm = document.getElementById('loginForm');     // Форма "Вхід"
    const registerForm = document.getElementById('registerForm'); // Форма "Реєстрація"

    function activateForm(formToShow, buttonToActivate) {
        // Знімаємо клас 'active' з обох кнопок та обох форм
        showLoginBtn.classList.remove('active');
        showRegisterBtn.classList.remove('active');
        loginForm.classList.remove('active');
        registerForm.classList.remove('active');

        // Додаємо клас 'active' до обраної форми та кнопки
        buttonToActivate.classList.add('active');
        formToShow.classList.add('active');
    }

    // Слухачі подій для кнопок
    showLoginBtn.addEventListener('click', () => {
        activateForm(loginForm, showLoginBtn);
    });

    showRegisterBtn.addEventListener('click', () => { // Ось тут обробляється клік по "Реєстрація"
        activateForm(registerForm, showRegisterBtn); // І активується форма реєстрації
    });

    // При завантаженні сторінки показуємо форму входу за замовчуванням
    activateForm(loginForm, showLoginBtn);
});