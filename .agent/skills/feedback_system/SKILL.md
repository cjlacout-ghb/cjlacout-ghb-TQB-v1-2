---
name: feedback_system
description: Instructions and templates for implementing a non-intrusive user feedback and suggestion system.
---

# Feedback System Skill

This skill provides a standardized way to collect user feedback, bug reports, and suggestions in a web application. It focuses on a frictionless user experience and easy backend integration.

## Core Logic

A Feedback System should follow these principles:
1. **Low Friction**: The trigger should be easily accessible but not intrusive (e.g., a fixed floating button or a footer link).
2. **Contextual Information**: Automatically capture relevant metadata (e.g., current page, user agent, app version) to help debug issues.
3. **Immediate Validation**: Use clear error states and success messages to confirm the user's action.
4. **Backend-as-a-Service**: Prefer serverless form handlers like [Formspree](https://formspree.io/), [Netlify Forms](https://www.netlify.com/products/forms/), or [Getform](https://getform.io/) to avoid managing email servers.

## Components

### 1. Feedback Button
- Typically fixed to the bottom-right or side of the viewport.
- Uses a recognizable icon (MessageSquare, Sparkles, or HelpCircle).
- Subtle animation on hover to encourage interaction.

### 2. Feedback Modal
- A clean form with fields for Name, Email (optional but recommended), and Message.
- A "Success" state that thanks the user and automatically closes or redirects.

## Best Practices

- **Fields**: Keep it short. Only ask for what you absolutely need.
- **Validation**: Ensure the message is not empty and the email (if provided) is valid.
- **Spam Protection**: Use the built-in honey pot or CAPTCHA features of your form provider.
- **Accessibility**: Ensure the modal is keyboard-navigable and uses proper ARIA labels.

## Integration Example

### 1. The Trigger Button
```tsx
<button 
    onClick={() => setIsOpen(true)}
    className="fixed bottom-6 right-6 p-4 bg-primary-500 text-white rounded-full shadow-lg hover:scale-110 transition-all z-40"
>
    <MessageSquare size={24} />
</button>
```

### 2. Backend Setup (Formspree)
1. Create an account at [formspree.io](https://formspree.io).
2. Create a new form and get the `Technical ID` (e.g., `xqepwazz`).
3. Use the ID in your `fetch` request as shown in the template.

---

## Resources

- [FeedbackModal.tsx](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/feedback_system/templates/FeedbackModal.tsx): Full-featured modal component.
- [FeedbackButton.tsx](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/feedback_system/templates/FeedbackButton.tsx): Floating trigger button.
