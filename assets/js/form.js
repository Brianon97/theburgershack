// assets/js/form.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Stop page reload

        // Reset previous errors
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

        // Get form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const action = document.getElementById('action').value;
        const message = document.getElementById('message').value.trim();
        const date = document.getElementById('date').value;

        let isValid = true;

        // Simple validation
        if (!firstName) {
            markInvalid('firstName', 'Please enter your first name.');
            isValid = false;
        }
        if (!lastName) {
            markInvalid('lastName', 'Please enter your last name.');
            isValid = false;
        }
        if (!action) {
            markInvalid('action', 'Please select a subject.');
            isValid = false;
        }
        if (!message) {
            markInvalid('message', 'Please write a message.');
            isValid = false;
        }
        if (!date) {
            markInvalid('date', 'Please select a date.');
            isValid = false;
        }

        if (!isValid) return;

        // Simulate form submission (replace with real backend later)
        console.log('Form Data:', { firstName, lastName, action, message, date });

        // Show success message
        successMessage.style.display = 'block';
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });

    // Helper function to show error
    function markInvalid(fieldId, message) {
        const field = document.getElementById(fieldId);
        field.classList.add('is-invalid');
        let feedback = field.parentElement.querySelector('.invalid-feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            field.parentElement.appendChild(feedback);
        }
        feedback.textContent = message;
    }
});