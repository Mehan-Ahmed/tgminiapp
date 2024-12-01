// Access Telegram Web App API
const tg = window.Telegram.WebApp;

// Expand the app to fullscreen
tg.expand();

// Get user data from Telegram
const user = tg.initDataUnsafe?.user || {};

// Update the UI with user information
if (user) {
  // Set user photo (if available)
  const photoUrl = user.photo_url || 'https://via.placeholder.com/100'; // Fallback to placeholder if no photo
  document.getElementById('profile-photo').src = photoUrl;

  // Set user name
  const fullName = user.first_name + (user.last_name ? ` ${user.last_name}` : '');
  document.getElementById('user-name').textContent = fullName;

  // Set username
  document.getElementById('username').textContent = user.username ? `@${user.username}` : 'No username';

  // Set Telegram ID
  document.getElementById('telegram-id').textContent = `ID: ${user.id}`;
} else {
  alert('Unable to fetch user data!');
}
