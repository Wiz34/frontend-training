document.getElementById("auth-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const result = document.getElementById("auth-result");

    if (username === "") {
        result.textContent = "Please enter a username.";
        result.style.color = "red";
        result.style.opacity = "0";
        setTimeout(() => { result.style.opacity = "1"; }, 100);
        return;
    }

    // Mock signup/login: just save the username
    localStorage.setItem("user", JSON.stringify({ username }));
    result.textContent = `Welcome, ${username}! Redirecting...`;
    result.style.color = "green";
    result.style.opacity = "0";
    setTimeout(() => { result.style.opacity = "1"; }, 100);

    // Redirect to index.html
    setTimeout(() => { window.location.href = "index.html"; }, 1000);
});