document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("signup-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("signup-username").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        
        localStorage.setItem("user", JSON.stringify({ username, email, password }));
        alert("Sign-up successful! You can now sign in.");
    });

    
    document.getElementById("signin-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("signin-email").value;
        const password = document.getElementById("signin-password").value;
        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.email === email && user.password === password) {
            alert("Login successful! Welcome " + user.username);
        } else {
            document.getElementById("login-message").textContent = "Invalid credentials. Please try again.";
        }
    });
});

function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}