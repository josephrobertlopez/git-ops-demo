// Simple web application
function authenticateUser(username, password) {
    // Basic authentication logic
    if (username === "admin" && password === "secret") {
        return true;
    }
    return false;
}

function startApp() {
    console.log("Starting application...");
    
    // Authentication check
    const user = prompt("Username:");
    const pass = prompt("Password:");
    
    if (authenticateUser(user, pass)) {
        console.log("Welcome! Authentication successful.");
    } else {
        console.log("Access denied!");
        return;
    }
}

startApp();