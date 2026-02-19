/**
 * Converts a string to camelCase format.
 * 
 * Transforms the input string by:
 * - Splitting on spaces, underscores, or hyphens
 * - Lowercasing the first word
 * - Capitalizing the first letter of subsequent words
 * - Joining all words without separators
 * 
 * @function toCamelCase
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {TypeError} If input is not a string
 * @throws {TypeError} If input is an empty string
 * @throws {TypeError} If input contains only separators
 * 
 * @example
 * toCamelCase('hello_world');        // Returns: 'helloWorld'
 * toCamelCase('hello-world');        // Returns: 'helloWorld'
 * toCamelCase('hello world');        // Returns: 'helloWorld'
 * toCamelCase('hello__world');       // Returns: 'helloWorld'
 * toCamelCase('  hello-world  ');    // Returns: 'helloWorld'
 * 
 * @example
 * // Error handling
 * toCamelCase(null);                 // Throws: TypeError 'Input must be a string'
 * toCamelCase('');                   // Throws: TypeError 'Input cannot be an empty string'
 * toCamelCase('___');                // Throws: TypeError 'Input cannot contain only separators'
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms the input string by:
 * - Splitting on spaces, underscores, or hyphens
 * - Lowercasing all words
 * - Joining words with dots as separators
 * 
 * @function toDotCase
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The converted dot.case string
 * @throws {TypeError} If input is not a string
 * @throws {TypeError} If input is an empty string
 * @throws {TypeError} If input contains only separators
 * 
 * @example
 * toDotCase('hello_world');          // Returns: 'hello.world'
 * toDotCase('hello-world');          // Returns: 'hello.world'
 * toDotCase('hello world');          // Returns: 'hello.world'
 * toDotCase('HelloWorld');           // Returns: 'hello.world'
 * toDotCase('  hello-world  ');      // Returns: 'hello.world'
 * 
 * @example
 * // Error handling
 * toDotCase(null);                   // Throws: TypeError 'Input must be a string'
 * toDotCase('');                     // Throws: TypeError 'Input cannot be an empty string'
 * toDotCase('___');                  // Throws: TypeError 'Input cannot contain only separators'
 */
function toCamelCase(input) {
    // Validation: check if input is a string
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Validation: check if string is empty
    if (input.length === 0) {
        throw new TypeError('Input cannot be an empty string');
    }

    // Trim leading/trailing whitespace
    const trimmed = input.trim();

    // Split by spaces, underscores, or hyphens, filter out empty strings
    const words = trimmed.split(/[\s_-]+/).filter(word => word.length > 0);

    // Validation: ensure we have at least one word after splitting
    if (words.length === 0) {
        throw new TypeError('Input cannot contain only separators');
    }

    // Convert to camelCase: first word lowercase, rest capitalize first letter
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Examples
console.log(toCamelCase('hello_world'));        // 'helloWorld'
console.log(toCamelCase('hello-world'));        // 'helloWorld'
console.log(toCamelCase('hello world'));        // 'helloWorld'
console.log(toCamelCase('hello__world'));       // 'helloWorld'
console.log(toCamelCase('  hello-world  '));    // 'helloWorld'

// Error cases
try {
    toCamelCase(null);
} catch (e) {
    console.error(e.message);                     // 'Input must be a string'
}

try {
    toCamelCase('');
} catch (e) {
    console.error(e.message);                     // 'Input cannot be an empty string'
}

function toDotCase(input) {
    // Validation: check if input is a string
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Validation: check if string is empty
    if (input.length === 0) {
        throw new TypeError('Input cannot be an empty string');
    }

    // Trim leading/trailing whitespace
    const trimmed = input.trim();

    // Split by spaces, underscores, or hyphens, filter out empty strings
    const words = trimmed.split(/[\s_-]+/).filter(word => word.length > 0);

    // Validation: ensure we have at least one word after splitting
    if (words.length === 0) {
        throw new TypeError('Input cannot contain only separators');
    }

    // Convert to dot.case: all lowercase, joined by dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Examples
console.log(toDotCase('hello_world'));        // 'hello.world'
console.log(toDotCase('hello-world'));        // 'hello.world'
console.log(toDotCase('hello world'));        // 'hello.world'
console.log(toDotCase('HelloWorld'));         // 'hello.world'
console.log(toDotCase('  hello-world  '));    // 'hello.world'