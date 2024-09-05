// Add interactivity if needed

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent! Thank you for contacting me.');
        form.reset();
    });
});
