// showPassword
document.getElementById("showPassword").addEventListener("change", function() {
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirmPassword");

    if (this.checked) {
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
    } else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
    }
});


// clear password
document.getElementById("clearText").addEventListener("click", function() {
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
});

// submit button
document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();  

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword || !password || !confirmPassword) {
        alert("Passwords do not match or are empty!");
    } else {
        window.location.href = "logIn.html"; 
    }
});
