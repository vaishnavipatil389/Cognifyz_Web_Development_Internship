document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        let isValid = true;

        // Validate Name
        const nameInput = document.getElementById('name');
        const nameValue = nameInput.value.trim();
        if (nameValue === '') {
            isValid = false;
            setErrorFor(nameInput, 'Name cannot be blank');
        } else {
            setSuccessFor(nameInput);
        }

        // Validate Email
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            isValid = false;
            setErrorFor(emailInput, 'Email cannot be blank');
        } else if (!isEmailValid(emailValue)) {
            isValid = false;
            setErrorFor(emailInput, 'Email is not valid');
        } else {
            setSuccessFor(emailInput);
        }

        // Validate Message
        const messageInput = document.getElementById('message');
        const messageValue = messageInput.value.trim();
        if (messageValue === '') {
            isValid = false;
            setErrorFor(messageInput, 'Message cannot be blank');
        } else {
            setSuccessFor(messageInput);
        }

        // If all inputs are valid, submit the form
        if (isValid) {
            form.submit();
        }
    });

    function setErrorFor(input, message) {
        const formGroup = input.parentElement; // .form-group
        const errorMessage = formGroup.querySelector('small');

        // Display error message
        errorMessage.innerText = message;

        // Add error class
        formGroup.classList.add('error');

        // Add aria attributes for accessibility
        input.setAttribute('aria-describedby', input.id + '-error');
        input.setAttribute('aria-invalid', 'true');
    }

    function setSuccessFor(input) {
        const formGroup = input.parentElement; // .form-group

        // Remove error message
        const errorMessage = formGroup.querySelector('small');
        errorMessage.innerText = '';

        // Remove error class
        formGroup.classList.remove('error');

        // Remove aria attributes for accessibility
        input.removeAttribute('aria-describedby');
        input.removeAttribute('aria-invalid');
    }

    function isEmailValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
