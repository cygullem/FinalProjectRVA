// Toggle password visibility
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

// Clear password fields
document.getElementById("clearText").addEventListener("click", function() {
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("email").value = "";
});

// Register button logic
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

// Login button logic
document.getElementById("loginButton").addEventListener("click", function(event){
    

    let loginField = document.getElementById("email").value;  
    let password = document.getElementById("password").value;

    if (!loginField || !password) {
        alert("Please fill in all login fields.");
    } else {
        window.location.href = "index.html";
    }

    event.preventDefault();
});
