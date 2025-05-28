document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.dataset.tab;

            // Remove 'active' class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked button and its corresponding content
            button.classList.add('active');
            document.getElementById(targetTabId).classList.add('active');
        });
    });

    // Set initial active tab (if any)
    const initialActiveButton = document.querySelector('.tab-button.active');
    if (initialActiveButton) {
        const initialTabId = initialActiveButton.dataset.tab;
        document.getElementById(initialTabId).classList.add('active');
    } else {
        // If no initial active tab, activate the first one
        if (tabButtons.length > 0) {
            tabButtons[0].classList.add('active');
            document.getElementById(tabButtons[0].dataset.tab).classList.add('active');
        }
    }


    // Scroll to Top button functionality
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const chatToggleBtn = document.querySelector('.chat-toggle'); // Assuming chat toggle is separate from fixed chat icon

    // Show/hide scroll-to-top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Smooth scroll to top
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for hero section arrow
    const heroScrollArrow = document.querySelector('.scroll-down-arrow a');
    if (heroScrollArrow) {
        heroScrollArrow.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Basic chat toggle (can be expanded)
    chatToggleBtn.addEventListener('click', () => {
        alert('Чат буде відкрито! (Це демонстрація, функціонал не реалізовано)');
        // Here you would typically open a chat widget or a modal
    });

});