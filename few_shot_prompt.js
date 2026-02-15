/**
 * Adds two numbers and returns their sum.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 * @throws {Error} If inputs are not valid numbers
 */
function addNumbers(a, b) {
    // Check for null or undefined
    if (a === null || a === undefined || b === null || b === undefined) {
        throw new Error('Inputs cannot be null or undefined');
    }

    // Check if inputs are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both inputs must be numbers');
    }

    // Check for NaN
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Inputs must be valid numbers');
    }

    return a + b;
}

module.exports = addNumbers;