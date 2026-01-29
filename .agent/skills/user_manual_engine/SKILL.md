---
name: user_manual_engine
description: Logic and best practices for creating a structured, multi-language markdown-based user manual with contextual deep-linking.
---

# User Manual Engine Skill

This skill provides a standardized framework for building comprehensive, searchable, and multi-language user manuals within React applications.

## 1. Core Structure

The manual should be data-driven and powered by Markdown for rich content formatting.

- **Section Object**: Each section must have:
    - `id`: A unique string for deep-linking.
    - `title`: A human-readable title.
    - `content`: Markdown string containing the documentation.
- **Language Parity**: For every `userManualEN.ts`, there must be a corresponding `userManualES.ts` with identical `id` keys.
- **Markdown Features**: Use standard Markdown (bold, lists, tables) and extended GFM (GitHub Flavored Markdown) for tables to ensure high scannability.

## 2. Logic & Best Practices

### Deep-Linking (Initial Sections)
- **Feature**: Allow the manual modal to open directly to a specific section using an `initialSection` prop.
- **Implementation**: Map standard help buttons throughout the app to specific section IDs (e.g., a help button near the TQB formula should link to `id: 'tie-breaking'`).

### Multi-Language Rendering
- **Consistency**: The `UserManualModal` should automatically switch content based on the application's global language state.
- **Toggle**: Provide an internal language toggle within the manual for users who prefer to read documentation in a specific language regardless of the UI language.

### Formatting Standards
- **Headings**: Use `###` as the primary heading level within sections to maintain hierarchy inside the modal.
- **Visual Cues**: Use bold text for UI elements (e.g., "Click **Calculate Rankings**").
- **Scannability**: Use tables for complex data (like file formats) and code blocks for examples.

### Component Design
- **Responsive Navigation**: Use a sidebar on desktop and a dropdown/select menu on mobile to navigate sections.
- **Scroll Management**: Automatically scroll the content area back to the top when a section or language is changed.
- **Backdrop & Dismissal**: Ensure the manual closes on ESC key or backdrop click to follow standard modal UX patterns.

---

## Resources

- [UserManualSection.ts](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/user_manual_engine/templates/UserManualSection.ts): Data structure and example section.
- [UserManualModal.tsx](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/user_manual_engine/templates/UserManualModal.tsx): Reusable modal viewer with sidebar navigation.
