// Default name used if the input is empty
var userName = "Lauren";

// Try to find the button and input by their IDs. They may be
// undefined if this script runs before the DOM is fully parsed.
var greetBtn = document.getElementById('greetBtn');
var nameInput = document.getElementById('nameInput');

// Creates or updates a paragraph below the button to show a fun greeting.
function showGreeting() {
	// Use the value from the input if provided, otherwise fall back to userName
	var name = (nameInput && nameInput.value && nameInput.value.trim()) || userName;

	// Find existing greeting element or create one if missing
	var existing = document.getElementById('greeting');
	if (!existing) {
		existing = document.createElement('p');
		existing.id = 'greeting';
		// Insert the greeting right after the button
		greetBtn.insertAdjacentElement('afterend', existing);
	}

	// Set a fun, personalized message
	existing.textContent = "Welcome, " + name + " — hope your day is full of ☀️ and smiles!";

	// Clear the input so it's ready for a new name
	if (nameInput) {
		nameInput.value = '';
	}
}

// Attach the click handler. If elements aren't available yet, wait for DOMContentLoaded.
function attachHandler() {
	if (!greetBtn) greetBtn = document.getElementById('greetBtn');
	if (!nameInput) nameInput = document.getElementById('nameInput');
	if (greetBtn) {
		greetBtn.addEventListener('click', showGreeting);
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', attachHandler);
} else {
	attachHandler();
}
