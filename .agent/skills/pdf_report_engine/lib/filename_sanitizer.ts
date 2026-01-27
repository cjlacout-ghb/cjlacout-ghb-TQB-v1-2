/**
 * Utility to sanitize strings for safe filenames.
 * Removes accents, special characters, and handles whitespace.
 */
export function sanitizeFilename(name: string): string {
    return name
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .replace(/[^a-z0-9]/gi, '_') // Replace non-alphanumeric with underscore
        .replace(/_+/g, '_') // Collapse multiples
        .replace(/^_+|_+$/g, ''); // Trim underscores from ends
}
