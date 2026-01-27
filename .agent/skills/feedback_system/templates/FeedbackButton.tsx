'use client';

import { MessageSquare } from 'lucide-react';

interface FeedbackButtonProps {
    onClick: () => void;
    label?: string;
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'relative';
}

/**
 * FeedbackButton Component
 * 
 * A reusable trigger button for the feedback modal.
 * Integrated using the Antigravity 'feedback_system' skill.
 */
export default function FeedbackButton({
    onClick,
    label = 'Feedback',
    position = 'bottom-right'
}: FeedbackButtonProps) {

    const positionClasses = {
        'bottom-right': 'fixed bottom-6 right-6',
        'bottom-left': 'fixed bottom-6 left-6',
        'top-right': 'fixed top-6 right-6',
        'top-left': 'fixed top-6 left-6',
        'relative': 'relative'
    };

    return (
        <button
            onClick={onClick}
            className={`
                ${positionClasses[position]}
                group flex items-center gap-2 px-5 py-3 
                bg-dark-800/80 backdrop-blur-md border border-dark-500 
                hover:border-primary-500/50 hover:bg-primary-500/10 
                text-white rounded-2xl shadow-2xl transition-all duration-300 
                hover:scale-105 active:scale-95 z-40
            `}
            aria-label="Open feedback modal"
        >
            <div className="p-1.5 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                <MessageSquare className="text-primary-400" size={20} />
            </div>
            <span className="font-semibold text-sm tracking-wide">{label}</span>

            {/* Subtle pulse ring */}
            <span className="absolute inset-0 rounded-2xl ring-2 ring-primary-500/0 group-hover:ring-primary-500/20 transition-all duration-500" />
        </button>
    );
}
