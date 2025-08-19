// Simple web application

/**
 * Validates user input with proper error handling
 * @param {string} input - User input to validate
 * @returns {boolean} - True if input is valid
 */
function validateInput(input) {
    if (!input || typeof input !== 'string') {
        return false;
    }
    return input.trim().length >= 3;
}

/**
 * Gets user input with retry logic
 * @returns {string|null} - User input or null if cancelled
 */
function getUserInput() {
    const input = prompt("Enter username (min 3 characters):");
    return input ? input.trim() : null;
}

/**
 * Main validation function
 * @returns {boolean} - True if user is validated
 */
function validateUser() {
    console.log("Starting user validation...");
    
    const userInput = getUserInput();
    if (!userInput) {
        console.log("Validation cancelled by user");
        return false;
    }
    
    if (!validateInput(userInput)) {
        console.log("Invalid input: username must be at least 3 characters");
        return false;
    }
    
    console.log(`User '${userInput}' validated successfully`);
    return true;
}

/**
 * Application entry point with user validation
 */
function startApp() {
    console.log("Starting application...");
    
    if (!validateUser()) {
        console.log("Application startup cancelled - validation failed");
        return;
    }
    
    console.log("Application ready! User validation passed.");
}

startApp();