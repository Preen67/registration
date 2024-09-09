function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return false;  // Prevent form submission
    } else {
        message.textContent = "";  // Clear the message
        return true;  // Allow form submission
    }
}
