/**
 * Type-Safe Translation Map
 */

export const translations = {
    en: {
        common: {
            title: "App Title",
            back: "Back",
            save: "Save"
        },
        home: {
            welcome: "Welcome to {app}"
        }
    },
    es: {
        common: {
            title: "Título de App",
            back: "Volver",
            save: "Guardar"
        },
        home: {
            welcome: "Bienvenido a {app}"
        }
    }
};

export type Language = 'en' | 'es';

// Critical: Derive type from the primary language to ensure parity
export type Translation = typeof translations.en;
