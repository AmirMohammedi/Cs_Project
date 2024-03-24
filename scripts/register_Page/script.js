const passwordFields = document.querySelectorAll(".password");
const eyes = document.querySelectorAll(".password-toggle-icon i");

passwordFields.forEach(function(passwordField, index) {
    eyes[index].addEventListener("click", function() {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            eyes[index].classList.remove("fa-eye");
            eyes[index].classList.add("fa-eye-slash");
        } else {
            passwordField.type = "password";
            eyes[index].classList.remove("fa-eye-slash");
            eyes[index].classList.add("fa-eye");
        }
    });
});