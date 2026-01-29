export interface UserManualSection {
    id: string;
    title: string;
    content: string;
}

export const exampleManual: UserManualSection[] = [
    {
        id: 'introduction',
        title: 'Introduction',
        content: `
# Welcome
This is a standard template for an application's user manual.

### Features
- **Markdown Support**: Render rich text easily.
- **Deep Linking**: Link to specific sections from your UI.
- **Responsive**: Works on mobile and desktop.
        `
    },
    {
        id: 'features',
        title: 'App Features',
        content: `
### Key Functions
1. **Feature A**: Description of what this does.
2. **Feature B**: How to use this.

> **Tip**: Use blockquotes for important notes.
        `
    }
];
