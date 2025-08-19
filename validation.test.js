/**
 * Comprehensive test suite for user validation functions
 */

// Mock prompt for testing
global.prompt = jest.fn();

const { validateInput, getUserInput, validateUser } = require('./app.js');

describe('User Validation System', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        // Reset console.log spy
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('validateInput', () => {
        test('should return true for valid input', () => {
            expect(validateInput('testuser')).toBe(true);
            expect(validateInput('admin')).toBe(true);
            expect(validateInput('   valid   ')).toBe(true); // trims whitespace
        });

        test('should return false for invalid input', () => {
            expect(validateInput('hi')).toBe(false);
            expect(validateInput('')).toBe(false);
            expect(validateInput(null)).toBe(false);
            expect(validateInput(undefined)).toBe(false);
            expect(validateInput(123)).toBe(false);
            expect(validateInput('  ')).toBe(false); // whitespace only
        });

        test('should handle edge cases', () => {
            expect(validateInput('abc')).toBe(true); // exactly 3 chars
            expect(validateInput('ab')).toBe(false); // less than 3 chars
        });
    });

    describe('getUserInput', () => {
        test('should return trimmed input when user provides valid input', () => {
            global.prompt.mockReturnValue('  testuser  ');
            expect(getUserInput()).toBe('testuser');
        });

        test('should return null when user cancels', () => {
            global.prompt.mockReturnValue(null);
            expect(getUserInput()).toBe(null);
        });

        test('should return null when user provides empty input', () => {
            global.prompt.mockReturnValue('');
            expect(getUserInput()).toBe(null);
        });

        test('should call prompt with correct message', () => {
            global.prompt.mockReturnValue('test');
            getUserInput();
            expect(global.prompt).toHaveBeenCalledWith('Enter username (min 3 characters):');
        });
    });

    describe('validateUser', () => {
        test('should return true for valid user input', () => {
            global.prompt.mockReturnValue('validuser');
            const result = validateUser();
            expect(result).toBe(true);
            expect(console.log).toHaveBeenCalledWith("Starting user validation...");
            expect(console.log).toHaveBeenCalledWith("User 'validuser' validated successfully");
        });

        test('should return false when user cancels input', () => {
            global.prompt.mockReturnValue(null);
            const result = validateUser();
            expect(result).toBe(false);
            expect(console.log).toHaveBeenCalledWith("Validation cancelled by user");
        });

        test('should return false for invalid input', () => {
            global.prompt.mockReturnValue('hi');
            const result = validateUser();
            expect(result).toBe(false);
            expect(console.log).toHaveBeenCalledWith("Invalid input: username must be at least 3 characters");
        });

        test('should handle empty string input', () => {
            global.prompt.mockReturnValue('');
            const result = validateUser();
            expect(result).toBe(false);
            expect(console.log).toHaveBeenCalledWith("Validation cancelled by user");
        });
    });
});