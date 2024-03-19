// For reg form
const regForm = document.querySelector('.regForm');
const usernameReg = document.getElementById('usernameReg');
const passwordReg = document.getElementById('passwordReg');

// For login form
const logForm = document.querySelector('.logForm');
const username = document.getElementById('username');
const password = document.getElementById('password');

// For username and passwords
const usernameAndPasswords = {};

// For getting the date and time today
const time = new Date().toLocaleString();

// For checking if a username already exists
function checkIfUserExists(username, usernameAndPasswords) {
	if (usernameAndPasswords.hasOwnProperty(username)) {
		return true
	}
}

// For validating username and passwords stored
function validateUserNameAndPassword(username, password, usernameAndPasswords,) {
	if(usernameAndPasswords.hasOwnProperty(username) && usernameAndPasswords[username] == password) {
		return true;
	}
}

// Function to check if password meets requirements
function isValidPassword(password) {
	// Check if password is at least 8 characters
	if (password.length < 8) {
		return false;
	}

	// Check if password only consists of integers
	if (/^\d+$/.test(password)) {
		return false;
	}

	// Check if password is a combination of uppercase and lowercase characters
	if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
		return false;
	}

	return true;
}

regForm.addEventListener('submit', function (e) {
	e.preventDefault();

	// Validate if one of the fields are empty
	if(usernameReg.value.length == 0 || passwordReg.value.length == 0) {
		alert("Fill out all the forms first");
	}

	// Validate the password
	if (!isValidPassword(passwordReg.value)) {
		alert("Password must be at least 8 characters, not only integers, and a combination of uppercase and lowercase characters.");
		return;
	}

	// Store username and password to JS object
	if (!checkIfUserExists(usernameReg.value, usernameAndPasswords)) {
		usernameAndPasswords[usernameReg.value] = passwordReg.value;
		console.log(usernameAndPasswords);

		// Display the login form and get rid of the registration form on the page
		logForm.style.display = "block";
		regForm.style.display = "none";
	} else {
		alert("Username is already taken");
	}
});

logForm.addEventListener('submit', function (e) {

	// Passing username and password to the function
	if (validateUserNameAndPassword(username.value, password.value, usernameAndPasswords)) {

		// Hide the login form and title after user has been validated
		logForm.style.display = "none";
		title.style.display = "none";

		// Greet user who just logged in
		document.querySelector('.welcomePanel #greeting').innerHTML = "Good day! " + username.value + ". It's currently " + time;
	}
	else {

		// Login invalid
		alert("Username and password don't exist");

	}

});