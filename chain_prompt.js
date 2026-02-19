function toKebabCase(input) {
    // Step 1: Input Validation
    if (typeof input !== 'string' || input === null) {
        throw new TypeError('Input must be a string');
    }

    // Step 2: String Normalization
    let normalized = input.trim().toLowerCase();

    // Step 3 & 4: Pattern Matching and Replacement
    // Match spaces, underscores, or camelCase transitions, then replace with hyphen
    let kebab = normalized.replace(/[\s_]+|(?=[A-Z])/g, '-');

    // Step 5: Final Cleanup
    // Remove leading and trailing hyphens
    kebab = kebab.replace(/^-+|-+$/g, '');

    return kebab;
}