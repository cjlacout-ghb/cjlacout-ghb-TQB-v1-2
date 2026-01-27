---
name: admin_modal
description: Instructions and templates for creating a robust developer/administrator modal for debugging and state management.
---

# Admin Modal Skill

This skill provides a standardized approach to implementing an "Admin Modal" or "Developer Dashboard" within a Next.js/Tailwind application. It is designed to expose debugging tools, state resets, and mock data injection without cluttering the primary user interface.

## Core Logic

An Admin Modal should follow these principles:
1. **Hidden Entry**: The modal should not be triggered by a visible button in the production UI. Instead, use a "Developer Gesture" (e.g., triple-clicking the app version number) or a URL query param (e.g., `?debug=true`).
2. **State Independence**: The modal should consume but not necessarily manage the global application state directly, except through defined action functions.
3. **Visual Distinction**: Use high-contrast colors (e.g., Warnings/Errors/Success) to distinguish administrative actions from regular UI.

## Components of an Admin Modal

### 1. The Modal Component
Must include:
- A secure close mechanism.
- Scrollable sections for different admin categories (Data, State, Settings).
- Real-time state preview.

### 2. Admin Actions
Common actions to implement:
- **`resetAppState()`**: Clears all local storage and resets state to defaults.
- **`injectMockData()`**: Populates the app with representative test data.
- **`toggleDebugOverlays()`**: Shows raw calculation values or hitboxes.

## Best Practices

- **Security**: Never include sensitive API keys or real user data in the admin modal's preview.
- **Environment Checks**: Ensure the entry gesture is disabled or restricted in production if the actions are destructive.
- **Animations**: Use consistent `animate-fade-in` and `animate-slide-up` classes to match the existing design system.

## Integration Example

### 1. Developer Gesture
Add this logic to your `Header.tsx` or `Footer.tsx` to trigger the modal:

```tsx
const [clickCount, setClickCount] = useState(0);
const [isAdminOpen, setIsAdminOpen] = useState(false);

const handleGesture = () => {
    setClickCount(prev => {
        if (prev + 1 >= 3) {
            setIsAdminOpen(true);
            return 0;
        }
        return prev + 1;
    });
    // Reset count after 2 seconds of inactivity
    setTimeout(() => setClickCount(0), 2000);
};

// ... In JSX:
<span onClick={handleGesture} className="cursor-default select-none">
    v1.1.0
</span>
```

### 2. Implementation in Page
```tsx
import AdminModal from '@/components/modals/AdminModal';

// Inside your main component:
<AdminModal 
    isOpen={isAdminOpen} 
    onClose={() => setIsAdminOpen(false)}
    actions={{
        resetApp: () => { /* wipe localstorage */ },
        injectMockData: () => { /* set sample state */ },
        toggleDebug: () => { /* toggle boolean */ },
        skipToStep: (n) => { /* set current step state */ }
    }}
    debugMode={debugMode}
/>
```

## Resources

- [AdminModal.tsx](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/admin_modal/templates/AdminModal.tsx): Reusable component template.
