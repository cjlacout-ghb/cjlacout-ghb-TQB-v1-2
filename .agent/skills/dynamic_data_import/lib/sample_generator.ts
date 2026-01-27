/**
 * Simple utility to generate sample CSV content based on headers
 */
export function generateSampleCsv(headers: string[], exampleRow: string[]): string {
    return [
        headers.join(','),
        exampleRow.join(',')
    ].join('\n');
}
