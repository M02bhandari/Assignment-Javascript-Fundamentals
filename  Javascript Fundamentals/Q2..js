// Function to test regex pattern against a string
function regexMatch(pattern, str) {
    // Create a RegExp object using the pattern
    const regex = new RegExp(pattern);
    // Test the string against the regex pattern
    return regex.test(str);
}

// Test cases
const tests = [
    { pattern: '^hello', str: 'hello world', expected: true }, // String starts with 'hello'
    { pattern: 'world$', str: 'hello world', expected: true }, // String ends with 'world'
    { pattern: 'hello', str: 'say hello to everyone', expected: true }, // String contains 'hello'
    { pattern: '\\d+', str: 'There are 123 numbers here', expected: true }, // String contains one or more digits
    { pattern: '^[a-z]+$', str: 'onlylowercaseletters', expected: true }, // String contains only lowercase letters
    { pattern: '^[a-z]+$', str: 'NotOnlyLowercase', expected: false }, // String does not contain only lowercase letters
    { pattern: '^[A-Z]', str: 'StartsWithCapital', expected: true }, // String starts with a capital letter
    { pattern: '[^a-zA-Z0-9]', str: 'Special$Char', expected: true }, // String contains a special character
    { pattern: 'cats|dogs', str: 'I love dogs', expected: true }, // String contains 'cats' or 'dogs'
    { pattern: 'cats|dogs', str: 'I love birds', expected: false } // String does not contain 'cats' or 'dogs'
];

// Function to run test cases
function runTests() {
    tests.forEach((test, index) => {
        const { pattern, str, expected } = test;
        const result = regexMatch(pattern, str);
        console.log(`Test ${index + 1}: Pattern: "${pattern}", String: "${str}" => Result: ${result} (Expected: ${expected})`);
        console.assert(result === expected, `Test ${index + 1} failed`);
    });
}

// Run the tests
runTests();
