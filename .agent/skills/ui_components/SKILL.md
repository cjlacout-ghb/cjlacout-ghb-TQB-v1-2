---
name: ui_components
description: Guidelines and templates for Layout (Tabs, Responsive, Spacing) and Components (Stat Cards, Tables, Forms).
---

# UI Components & Layout Skill

This skill provides expert guidance and reusable patterns for building high-fidelity layouts and interactive components within the TQB design system.

## 1. Layout & Responsiveness

### Tab Navigation
- **Desktop**: Use a vertical sidebar with `w-56 flex-shrink-0 border-r border-dark-500`. Active tabs should have `bg-primary-500/20 text-primary-400 border-l-2 border-primary-500`.
- **Mobile**: Use a full-width select input (`input text-sm`) for switching between sections to save space.

### Responsive Breakpoints
- **sm (640px)**: Transition from single-column to horizontal layouts (e.g., `flex-col sm:flex-row`).
- **md (768px)**: Show sidebars and advance grid layouts.
- **lg (1024px)**: Maximize container width (usually `max-w-4xl` for data-heavy screens).

### Spacing Standards
- **Container Padding**: `p-4 sm:p-6`.
- **Vertical Rhythm**: `space-y-6` for major sections, `space-y-3` or `space-y-4` for list items.
- **Grid Gaps**: `gap-4` for standard clusters, `gap-6` for larger section separation.

---

## 2. High-Fidelity Components

### Stat Cards
- Use the `.card` base class (`bg-dark-800/80 backdrop-blur-sm border border-dark-500 rounded-2xl`).
- Use `animate-slide-up` with staggered `animation-delay` for list items to create a premium feel.
- Incorporate subtle gradients for key indicators (e.g., `bg-gradient-to-br from-primary-500 to-primary-700`).

### Tables
- Use the `.table-dark` utility.
- Headers should be uppercase with `tracking-wider` and `text-gray-400`.
- Use `font-mono` for numeric data to ensure alignment.
- Implement hover states on rows: `hover:bg-dark-700/30`.

### Forms
- **Inputs**: Use the `.input` class. Always include a `label` with `text-xs text-gray-400 mb-1`.
- **Error States**: Use `.input-error` and display a helper message with `text-error-400`.
- **Validation**: Combine client-side validation with real-time feedback (clearing errors on change).

---

## Resources

- [Tabs.tsx](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/ui_components/templates/Tabs.tsx): Responsive tab navigation template.
- [StatCard.tsx](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/ui_components/templates/StatCard.tsx): Standardized stat card template.
- [DataTable.tsx](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/ui_components/templates/DataTable.tsx): High-fidelity table template.
