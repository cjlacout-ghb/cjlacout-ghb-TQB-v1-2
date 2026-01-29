'use client';

import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface UserManualSection {
    id: string;
    title: string;
    content: string;
}

interface UserManualModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: UserManualSection[];
    title: string;
    initialSection?: string;
}

export default function UserManualModal({
    isOpen,
    onClose,
    content,
    title,
    initialSection
}: UserManualModalProps) {
    const [activeSection, setActiveSection] = useState<string>(content[0]?.id || '');
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && initialSection) {
            setActiveSection(initialSection);
        }
    }, [isOpen, initialSection]);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [activeSection]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="bg-dark-800 border border-dark-500 rounded-2xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden shadow-2xl animate-slide-up">
                {/* Header */}
                <div className="p-4 border-b border-dark-600 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        📖 {title}
                    </h2>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-white rounded-lg">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                    {/* Navigation */}
                    <nav className="w-full md:w-56 p-4 border-b md:border-b-0 md:border-r border-dark-600 overflow-y-auto">
                        <ul className="space-y-1">
                            {content.map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() => setActiveSection(section.id)}
                                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all ${activeSection === section.id
                                                ? 'bg-primary-500/20 text-primary-400 border-l-2 border-primary-500'
                                                : 'text-gray-400 hover:bg-white/5'
                                            }`}
                                    >
                                        {section.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Content */}
                    <div ref={contentRef} className="flex-1 p-6 overflow-y-auto scroll-smooth">
                        {content.filter(s => s.id === activeSection).map(section => (
                            <div key={section.id} className="prose prose-invert prose-purple max-w-none">
                                <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {section.content}
                                </ReactMarkdown>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
