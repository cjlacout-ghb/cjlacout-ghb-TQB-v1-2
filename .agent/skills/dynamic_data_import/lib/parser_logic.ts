/**
 * Reusable CSV Parsing Engine
 */
export function basicParser(content: string, requiredHeaders: string[]) {
    const errors: string[] = [];
    const lines = content.trim().split(/\r?\n/);

    if (lines.length < 2) return { success: false, errors: ['File is empty'] };

    const header = lines[0].split(',').map(h => h.trim().toLowerCase());
    const headerIndices: Record<string, number> = {};

    for (const req of requiredHeaders) {
        const idx = header.indexOf(req.toLowerCase());
        if (idx === -1) {
            errors.push(`Missing column: ${req}`);
        } else {
            headerIndices[req] = idx;
        }
    }

    if (errors.length > 0) return { success: false, errors };

    const rows: any[] = [];
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        const values = line.split(',').map(v => v.trim());

        // Custom row mapping logic would go here
        rows.push({
            index: i + 1,
            values,
            headerIndices
        });
    }

    return { success: true, rows };
}
