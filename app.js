// Initialize Telegram Web App
const tg = window.Telegram.WebApp;

// Fetch user data
const user = tg.initDataUnsafe?.user || {}; // Safe fallback in case no user data is available

// Display user info in the app
const userInfoContainer = document.getElementById("user-info");

if (user.id) {
    userInfoContainer.innerHTML = `
        <h3>User Information</h3>
        <p><strong>First Name:</strong> ${user.first_name || "N/A"}</p>
        <p><strong>Last Name:</strong> ${user.last_name || "N/A"}</p>
        <p><strong>Username:</strong> ${user.username || "N/A"}</p>
        <p><strong>Language:</strong> ${user.language_code || "N/A"}</p>
    `;
} else {
    userInfoContainer.innerHTML = "<p>User data is not available.</p>";
}

// Optional: Show Telegram Main Button
tg.MainButton.text = "Proceed";
tg.MainButton.show();

// Handle main button click
tg.MainButton.onClick(() => {
    tg.sendData("User clicked the button!");
});
