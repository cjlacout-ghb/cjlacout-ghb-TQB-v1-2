---
name: design_system
description: Design Guidelines, Typography, Color Palettes, and UI standards for building premium, high-fidelity web applications.
---

# Design System Skill

This skill defines the visual language and user interface standards for high-fidelity applications. It ensures consistency across typography, layout, behavior, and color usage.

## 1. Typography

| Role | Font Family | Usage |
|------|-------------|-------|
| **Display/Headings** | `Lato`, `system-ui` | Bold, tracking-tight, for titles and headers. |
| **Body Text** | `Inter`, `sans-serif` | Normal weight, for readable content and descriptions. |
| **Statistical/Code** | `Consolas`, `monospace` | For numbers, rankings, and technical data. |

### Best Practices:
- Use `font-bold` for `h1` through `h3`.
- Maintain a line-height of `leading-relaxed` for body text.
- Use `text-gray-400` or `text-gray-500` for secondary information to create hierarchy.

---

## 2. Color Palette & UI Colors

The design language uses a **Dark Mode First** approach with vibrant accents.

### Core Palettes (Hex)
- **Primary (Violet)**: `#8B5CF6` (Main brand color, interactive elements)
- **Success (Emerald)**: `#10B981` (Confirmations, completions, top rankings)
- **Warning (Amber)**: `#F59E0B` (Alerts, secondary highlights)
- **Error (Red)**: `#EF4444` (Destructive actions, hard resets)

### UI Surfaces
- **Background**: `linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #2D1B4E 100%)`
- **Cards**: `bg-dark-800/80` with `backdrop-blur-sm` and `border-dark-500`.
- **Inputs**: `bg-dark-700` with `border-dark-500` and `focus:ring-primary-500/20`.

---

## 3. General UI Guidelines

### Glassmorphism & Depth
- Use `backdrop-blur` on modals and cards to create depth.
- Use `shadow-xl` or `shadow-2xl` with a colored tint (e.g., `shadow-primary-500/25`) for primary buttons.

### Components
- **Buttons**: `rounded-xl` (12px) is the standard. Avoid sharp corners.
- **Modals**: Must include a dark, blurred backdrop (`bg-black/70`) to focus user attention.
- **Animations**: 
  - `animate-fade-in` for new elements.
  - `animate-slide-up` (20px translate) for modals and page transitions.

### Spacing
- Use a consistent `p-4` to `p-6` for internal card padding.
- Standardize on `gap-4` for grid layouts.

---

## Resources

- [tailwind.config.ts](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/design_system/templates/tailwind.config.ts): Reusable Tailwind configuration.
- [globals.css](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/design_system/templates/globals.css): Core CSS variables and component layers.
