---
name: pdf_report_engine
description: Logic and best practices for generating professional, bilingual tournament reports in PDF format using jsPDF.
---

# PDF Report Engine Skill

This skill provides the architecture and logic for generating professional-grade PDF reports for tournament results. It specializes in multi-page, data-heavy documents with localized support.

## 1. Core Architecture

The engine is built on `jspdf` and `jspdf-autotable`. It follows a sequential rendering flow:

1.  **Context Initialization**: Set units to `mm`, format to `a4`, and load translation maps based on the user's language.
2.  **Branding Header**: A full-width `rect` with a dark theme background and centralized tournament branding.
3.  **Dynamic Sections**: 
    - **Final Standings**: High-level rankings.
    - **Calculation Summary**: Granular details (Runs/Innings ratios) used to break ties.
    - **Game Results**: Listing individual matchups.
    - **Formula Reference**: Educational text explaining the math (TQB/ER-TQB).
4.  **Footer**: Versioning, rights, and page numbers on every page.

## 2. Logic & Best Practices

### Page Management
- **Progressive `yPos` Tracking**: Always track the current vertical position (`yPos`).
- **Dynamic Breaks**: Before starting a new section, check if `yPos > 230` (A4 limit is ~297mm). If exceeded, call `doc.addPage()` and reset `yPos`.
- **AutoTable Interaction**: Use `(doc as any).lastAutoTable.finalY` to accurately reset `yPos` after a table completes.

### Localization
- Use a `translations` object mapped by language code (`en`, `es`).
- All titles, headers, and labels must be fetched from the translation map.
- Sanitize the output filename by removing accents and special characters from the tournament name.

### UI Consistency
- **Primary Color**: Use the project's signature purple `[139, 92, 246]` for headers and accents.
- **Typography**: 
    - `helvetica bold` for titles.
    - `courier` for numeric data to ensure perfect monochromatic alignment.
- **Alternating Rows**: Always use `alternateRowStyles` in tables for scannability.

### Robust Downloads
- Always use the `Blob` + `URL.createObjectURL` approach for triggering downloads. It is more reliable across modern browsers than simple `doc.save()`.

---

## Resources

- [pdf_template.ts](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/pdf_report_engine/lib/pdf_template.ts): Core generation function template.
- [filename_sanitizer.ts](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/pdf_report_engine/lib/filename_sanitizer.ts): Utility for clean exports.
