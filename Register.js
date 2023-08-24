document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const rePass = form.rePassword.value;
        const user = form.user.value;

        // You can perform further validation here
        
        // Simulate registration success
        if (password===rePass) {
            message.textContent = `Registration successful for ${username}!`;
            message.style.color = "green";
        }
        else
        {
            message.textContent = `Invalid email or password!!`;
            message.style.color = "red";
        }
        
        // Clear form fields
        form.reset();
    });
});