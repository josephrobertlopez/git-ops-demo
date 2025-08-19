// Configuration - NEVER commit sensitive data!
const config = {
    apiKey: process.env.API_KEY || "your-api-key-here",
    dbPassword: process.env.DB_PASSWORD || "your-db-password-here",
    jwtSecret: process.env.JWT_SECRET || "your-jwt-secret-here"
};

module.exports = config;