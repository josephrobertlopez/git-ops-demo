// Simple web application
function startApp() {
    console.log("Starting application...");
    
    if (!validateUser()) {
        console.log("Validation failed!");
        return;
    }
    
    console.log("User validated successfully!");
}

function validateUser() {
    // Enhanced validation with multiple checks
    console.log("Validating user...");
    
    const userInput = getUserInput();
    if (!userInput) return false;
    
    return validateInput(userInput);
}

function getUserInput() {
    return prompt("Enter username:");
}

function validateInput(input) {
    return input && input.length > 3;
}

startApp();