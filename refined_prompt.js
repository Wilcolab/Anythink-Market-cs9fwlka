/**
 * Converts a string to dot case (dot-separated, lowercase format).
 * 
 * Transforms input strings by:
 * - Converting camelCase to camel.case
 * - Replacing spaces, underscores, and hyphens with dots
 * - Converting all characters to lowercase
 * 
 * @function toDotCase
 * @param {string} str - The input string to convert to dot case
 * @returns {string} The converted string in dot case format
 * 
 * @example
 * // Returns "hello.world"
 * toDotCase("helloWorld");
 * 
 * @example
 * // Returns "hello.world"
 * toDotCase("hello_world");
 * 
 * @example
 * // Returns "hello.world"
 * toDotCase("hello-world");
 * 
 * @example
 * // Returns "hello.world.example"
 * toDotCase("HelloWorldExample");
 */
function toDotCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1.$2') // camelCase -> camel.Case
        .replace(/[\s_-]+/g, '.') // spaces, underscores, hyphens -> dots
        .toLowerCase(); // convert to lowercase
}

module.exports = toDotCase;