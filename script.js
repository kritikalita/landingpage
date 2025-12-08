document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Logic ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');
    const links = document.querySelectorAll('.nav-links a');

    // Function to toggle the menu open/closed
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    // Event listeners for opening/closing
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }

    // Close menu automatically when a user clicks a link to scroll
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });


    // --- Volunteer Form Simulation Logic ---
    const form = document.getElementById('volunteerForm');
    const formFeedback = document.getElementById('form-feedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the page from reloading
            
            // Simulate a network request/submission
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Submitting...';
            btn.disabled = true;

            setTimeout(() => {
                // Hide the form and show the thank you message
                form.style.display = 'none';
                if (formFeedback) {
                    formFeedback.style.display = 'block';
                }
            }, 1000);
        });
    }
});