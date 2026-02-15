/**
 * Chain Prompt: Convert a string to kebab-case
 * 
 * Step 1: Input Validation
 * - Check if input is a string
 * - Handle null/undefined cases
 * - Return empty string for invalid inputs
 * 
 * Step 2: Normalization
 * - Replace underscores with spaces
 * - Replace hyphens with spaces
 * - Handle camelCase by inserting spaces before capitals
 * - Trim extra whitespace
 * 
 * Step 3: Formatting
 * - Convert entire string to lowercase
 * - Replace spaces with hyphens
 * - Remove any duplicate consecutive hyphens
 * - Return final kebab-case string
 */

function toKebabCase(input) {
    // Step 1: Input Validation
    if (typeof input !== 'string' || input === null || input === undefined) {
        return '';
    }

    // Step 2: Normalization
    let normalized = input
        // Replace underscores with spaces
        .replace(/_/g, ' ')
        // Replace hyphens with spaces
        .replace(/-/g, ' ')
        // Handle camelCase by inserting spaces before capital letters
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        // Handle sequences of capitals (e.g., "HTTPServer" -> "HTTP Server")
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
        // Trim extra whitespace
        .trim();

    // Step 3: Formatting
    return normalized
        // Convert to lowercase
        .toLowerCase()
        // Replace spaces with hyphens
        .replace(/\s+/g, '-')
        // Remove any duplicate consecutive hyphens
        .replace(/-+/g, '-');
}

// Example usage
console.log(toKebabCase('camelCaseString'));      // camel-case-string
console.log(toKebabCase('snake_case_string'));    // snake-case-string
console.log(toKebabCase('PascalCaseString'));     // pascal-case-string
console.log(toKebabCase('some-hyphenated-text')); // some-hyphenated-text
console.log(toKebabCase('HTTPServerResponse'));   // http-server-response

module.exports = toKebabCase;