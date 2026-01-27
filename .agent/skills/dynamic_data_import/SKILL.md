---
name: dynamic_data_import
description: Complex CSV/TXT parsing and validation logic, error boundaries for malformed files, and raw data mapping.
---

# Dynamic Data Import Skill

This skill provides the architectural pattern for importing structured data (CSV/TXT) into an application with robust validation and error handling.

## 1. Core Principles

-   **Zero Trust**: Assume all incoming data is malformed until proven otherwise.
-   **Header-First Mapping**: Never rely on column order. Always map headers to keys dynamically to allow flexible file layouts.
-   **Graceful Recovery**: Capture all errors and continue parsing where possible to provide the user with a complete list of issues (e.g., "Error on line 5, Error on line 12").
-   **Bilingual Validation**: Validation messages should be fetched from the application's translation system based on the current context.

## 2. Validation Rules

### Header Validation
- Define a list of `requiredHeaders`.
- Sanitize headers (lowercase, trim) before comparison.
- Fail immediately if any required column is missing.

### Row-Level Validation
- **Numeric Fields**: Validate that strings are actual numbers (`parseInt`/`parseFloat`) and within logical bounds (e.g., non-negative).
- **Format Validation**: Use strict Regex for specialized string formats (e.g., innings like `7`, `6.1`, or `5.2`).
- **Entity Identification**: Auto-generate unique IDs for new entities (teams, players) discovered during parsing.

## 3. Best Practices

### User Experience
-   **Error Summaries**: Collect all errors in an array and display them as a list.
-   **Pre-parsing Warnings**: Alert the user if the team count exceeds or falls below logical limits (e.g., "Minimum 3 teams required").
-   **Sample Data**: Always provide a "Copy Sample CSV" or "View Format" helper to reduce user friction.

### Implementation Patterns
-   Use `FileReader` with a `Promise` wrapper for clean asynchronous file handling.
-   Implement a `Map` to track discovered entities to avoid duplicates while generating IDs.
-   Store data row indices (e.g., `rowNum = i + 1`) to point users exactly where the error occurred in their file.

---

## Resources

- [parser_logic.ts](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/dynamic_data_import/lib/parser_logic.ts): Reusable parsing engine template.
- [sample_generator.ts](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/dynamic_data_import/lib/sample_generator.ts): Utility for generating format documentation.
