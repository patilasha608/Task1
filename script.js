// ===== Signup =====
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let username = document.getElementById("signupUsername").value.trim();
        let email = document.getElementById("signupEmail").value.trim();
        let password = document.getElementById("signupPassword").value.trim();
        let message = document.getElementById("signupMessage");

        if (!username || !email || !password) {
            message.style.color = "yellow";
            message.textContent = "All fields are required!";
            return;
        }

        localStorage.setItem("user", username);
        message.style.color = "lightgreen";
        message.textContent = "Signup successful! Redirecting...";
        
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    });
}

// ===== Login =====
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let username = document.getElementById("loginUsername").value.trim();
        let password = document.getElementById("loginPassword").value.trim();
        let message = document.getElementById("loginMessage");

        if (!username || !password) {
            message.style.color = "yellow";
            message.textContent = "All fields are required!";
            return;
        }

        message.style.color = "lightgreen";
        message.textContent = "Login successful! Redirecting...";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    });
}

// ===== Logout =====
function logout() {
    window.location.href = "index.html";
}