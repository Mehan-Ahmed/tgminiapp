// Initialize Telegram Web App
const tg = window.Telegram.WebApp;

// Fetch user data
const user = tg.initDataUnsafe?.user || {};
const profilePicture = document.getElementById("profile-picture");
const userName = document.getElementById("user-name");
const userUsername = document.getElementById("user-username");

// Display user info
if (user.id) {
    userName.textContent = `${user.first_name || "User"} ${user.last_name || ""}`;
    userUsername.textContent = user.username ? `@${user.username}` : "No username";

    // Generate profile picture URL
    const profilePicURL = `https://t.me/i/userpic/320/${user.telegramid}.jpg`;

    // Display profile picture
    profilePicture.src = profilePicURL;
    profilePicture.onerror = () => {
        profilePicture.src = "https://via.placeholder.com/100?text=No+Image"; // Default fallback
    };
} else {
    userName.textContent = "User data not available";
    userUsername.textContent = "";
    profilePicture.src = "https://via.placeholder.com/100?text=No+Image"; // Default fallback
}
