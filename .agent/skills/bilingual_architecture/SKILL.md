---
name: bilingual_architecture
description: Instructions and templates for implementing a type-safe, context-based bilingual (English/Spanish) system in React/Next.js.
---

# Bilingual Architecture Skill

This skill provides the blueprint for implementing a robust, type-safe multi-language system in React applications. It ensures zero overhead for developers while maintaining strict type parity between languages.

## 1. Core Architecture

The system relies on three pillars:
1.  **Central Translation Map**: A single object containing all strings, indexed by language code (`en`, `es`).
2.  **Derived Type Safety**: The `Translation` type is derived from the primary language (usually English). This ensures that any missing key in a secondary language triggers a TypeScript error.
3.  **Language Context**: A React Context that manages the current language state and provides the "t" (translate) object to the entire application.

## 2. Implementation Rules

### Type Parity
- **Rule**: Always define new keys in the English (`en`) object first.
- **Rule**: Use `export type Translation = typeof translations.en;` to enforce that all languages have exactly the same structure.

### Context Usage
- **Hook**: Use the `useLanguage()` hook to access translations.
- **Pattern**: `const { t, language, setLanguage } = useLanguage();`.
- **UI**: Display strings using `{t.section.key}` for clean, readable code.

### Placeholders & Interpolation
- Use curly braces for dynamic values within strings: `"Hello {name}"`.
- Handle replacements in the UI layer using `.replace('{name}', value)`.

## 3. Best Practices

-   **Flat vs. Nested**: Group translations by screen or component (e.g., `common`, `teamEntry`, `pdf`) to keep the map organized.
-   **No Hardcoding**: Never use hardcoded strings in components. If a string is needed, it must be added to the translation map.
-   **Client Side**: In Next.js, ensure the `LanguageProvider` is a "Client Component" (`'use client'`) to manage state correctly.
-   **Localization Utilities**: For numbers and dates, combine translation keys with `Intl.NumberFormat` or `Intl.DateTimeFormat` using the `language` code from context.

---

## Resources

- [LanguageContext.tsx](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/bilingual_architecture/templates/LanguageContext.tsx): The context provider template.
- [translations.ts](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/bilingual_architecture/templates/translations.ts): Type-safe translation map template.
