


    if (user) {
        // Store user info in localStorage for the current session
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "home.html"; // Redirect to homepage after successful login
    } else {
        alert("Invalid username or password!");
    }
;

// On page load, check for logged-in user in welcome.html
window.onload = function () {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        document.getElementById("welcomeusername").textContent = currentUser.username;
    } else {
        window.location.href = "login.html"; // Redirect to login if not logged in
    }
};

// Logout function
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html"; // Redirect to login page
}
