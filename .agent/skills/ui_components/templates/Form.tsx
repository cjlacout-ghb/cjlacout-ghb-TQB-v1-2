'use client';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

/**
 * Standardized High-Fidelity Input
 */
export function FormInput({ label, error, ...props }: InputProps) {
    return (
        <div className="space-y-1">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                {label}
            </label>
            <input
                {...props}
                className={`input ${error ? 'input-error' : ''} ${props.className || ''}`}
            />
            {error && (
                <p className="text-xs text-error-400 mt-1 ml-1 flex items-center gap-1 animate-fade-in">
                    {error}
                </p>
            )}
        </div>
    );
}

/**
 * Premium Form Container
 */
export function FormContainer({ title, children, onSubmit }: { title: string, children: React.ReactNode, onSubmit: (e: React.FormEvent) => void }) {
    return (
        <form onSubmit={onSubmit} className="card p-6 space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-dark-600 pb-4">{title}</h3>
            <div className="space-y-4">
                {children}
            </div>
        </form>
    );
}
