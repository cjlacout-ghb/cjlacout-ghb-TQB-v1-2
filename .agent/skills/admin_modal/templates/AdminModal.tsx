'use client';

import { useState, useEffect } from 'react';
import { X, Trash2, Database, Bug, Settings, Eye, EyeOff, Layout } from 'lucide-react';

interface AdminModalProps {
    isOpen: boolean;
    onClose: () => void;
    // Actions passed from the main application state
    actions: {
        resetApp: () => void;
        injectMockData: () => void;
        toggleDebug: () => void;
        skipToStep: (step: number) => void;
    };
    debugMode: boolean;
}

/**
 * AdminModal Component
 * 
 * A specialized modal for developer actions and state inspection.
 * Integrated using the Antigravity 'admin_modal' skill.
 */
export default function AdminModal({ isOpen, onClose, actions, debugMode }: AdminModalProps) {
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

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="modal-backdrop animate-fade-in z-[90]"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                {/* Modal Content */}
                <div
                    className="modal-content animate-slide-up pointer-events-auto max-w-2xl border-2 border-primary-500/50"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="admin-title"
                >
                    <div className="card h-full flex flex-col overflow-hidden">
                        {/* Header */}
                        <div className="card-header flex items-center justify-between bg-dark-900/50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary-500/20 rounded-lg">
                                    <Bug className="text-primary-400" size={24} />
                                </div>
                                <div>
                                    <h2 id="admin-title" className="text-xl font-bold text-white">
                                        Developer Console
                                    </h2>
                                    <p className="text-xs text-gray-500 font-mono">v1.1.0-admin</p>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="card-body overflow-y-auto space-y-8">

                            {/* Section: Data Management */}
                            <section>
                                <div className="flex items-center gap-2 mb-4">
                                    <Database size={18} className="text-primary-400" />
                                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                                        Data Operations
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <button
                                        onClick={() => {
                                            if (confirm('Are you sure? This will wipe all current tournament data.')) {
                                                actions.resetApp();
                                                onClose();
                                            }
                                        }}
                                        className="btn-error w-full flex justify-start px-4"
                                    >
                                        <Trash2 size={18} /> Hard Reset App
                                    </button>
                                    <button
                                        onClick={() => {
                                            actions.injectMockData();
                                            onClose();
                                        }}
                                        className="btn-success w-full flex justify-start px-4"
                                    >
                                        <Database size={18} /> Load Sample Data
                                    </button>
                                </div>
                            </section>

                            {/* Section: Debugging */}
                            <section>
                                <div className="flex items-center gap-2 mb-4">
                                    <Bug size={18} className="text-primary-400" />
                                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                                        Debugging
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-dark-700/50 rounded-xl border border-dark-500">
                                        <div>
                                            <p className="font-medium text-white">Debug Overlays</p>
                                            <p className="text-xs text-gray-500">Show raw TQB state and calculation logs</p>
                                        </div>
                                        <button
                                            onClick={actions.toggleDebug}
                                            className={`p-2 rounded-lg transition-all ${debugMode ? 'bg-primary-500 text-white' : 'bg-dark-600 text-gray-400'}`}
                                        >
                                            {debugMode ? <Eye size={20} /> : <EyeOff size={20} />}
                                        </button>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Navigation Overrides */}
                            <section>
                                <div className="flex items-center gap-2 mb-4">
                                    <Layout size={18} className="text-primary-400" />
                                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                                        Workflow Control
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {[1, 2, 3, 4, 5].map(step => (
                                        <button
                                            key={step}
                                            onClick={() => {
                                                actions.skipToStep(step);
                                                onClose();
                                            }}
                                            className="px-4 py-2 bg-dark-700 hover:bg-primary-500/20 border border-dark-500 text-white rounded-lg transition-colors text-sm font-mono"
                                        >
                                            Jump to Step {step}
                                        </button>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 bg-dark-900/30 border-t border-dark-500 flex justify-between items-center">
                            <p className="text-[10px] text-gray-500 uppercase tracking-tighter">
                                System Status: <span className="text-success-500">Online</span>
                            </p>
                            <button
                                onClick={onClose}
                                className="text-sm text-gray-400 hover:text-white"
                            >
                                Dismiss
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
