'use client';

import { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
    formId: string; // Formspree or similar ID
    appName?: string;
}

/**
 * FeedbackModal Component
 * 
 * A reusable modal for collecting user suggestions and bug reports.
 * Integrated using the Antigravity 'feedback_system' skill.
 */
export default function FeedbackModal({ isOpen, onClose, formId, appName = 'App' }: FeedbackModalProps) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    // Handle ESC key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message) return;

        setStatus('submitting');

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    message,
                    _subject: `[${appName} Feedback] New submission`
                })
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setEmail('');
                    setMessage('');
                }, 2500);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div className="modal-backdrop animate-fade-in z-[90]" onClick={onClose} />

            {/* Modal */}
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
                <div className="modal-content animate-slide-up pointer-events-auto max-w-md w-full">
                    <div className="card h-full flex flex-col">
                        <div className="card-header flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <MessageSquare className="text-primary-400" size={24} />
                                Send Feedback
                            </h2>
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="card-body p-6">
                            {status === 'success' ? (
                                <div className="py-8 text-center animate-fade-in">
                                    <CheckCircle2 className="mx-auto text-success-500 mb-4" size={48} />
                                    <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                                    <p className="text-gray-400">Your feedback has been sent successfully.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Email (Optional)</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your@email.com"
                                            className="input"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Message *</label>
                                        <textarea
                                            required
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="What's on your mind?"
                                            className="input min-h-[120px] resize-none"
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-error-400 text-sm">Failed to send. Please try again.</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="btn-primary w-full"
                                    >
                                        {status === 'submitting' ? 'Sending...' : (
                                            <span className="flex items-center justify-center gap-2">
                                                <Send size={18} /> Send Suggestion
                                            </span>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
