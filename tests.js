// Quick test file
function runTests() {
    console.log("Testing validation...");
    
    // Test valid input
    if (validateInput("testuser")) {
        console.log("✓ Valid input test passed");
    }
    
    // Test invalid input
    if (!validateInput("hi")) {
        console.log("✓ Invalid input test passed");
    }
}

// Export for testing
if (typeof module !== 'undefined') {
    module.exports = { runTests };
}