'use client';

import { useState } from 'react';

interface Tab {
    id: string;
    label: string;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onChange: (id: string) => void;
}

/**
 * Responsive Tabs Component
 * 
 * Layout: Sidebar on Desktop, Dropdown on Mobile.
 */
export default function Tabs({ tabs, activeTab, onChange }: TabsProps) {
    return (
        <div className="flex flex-col md:flex-row h-full">
            {/* Mobile View: Select Dropdown */}
            <div className="md:hidden p-4 border-b border-dark-500 bg-dark-800 flex-shrink-0">
                <select
                    value={activeTab}
                    onChange={(e) => onChange(e.target.value)}
                    className="input text-sm"
                >
                    {tabs.map((tab) => (
                        <option key={tab.id} value={tab.id}>
                            {tab.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Desktop View: Sidebar Navigation */}
            <nav className="hidden md:block w-56 flex-shrink-0 border-r border-dark-500 overflow-y-auto p-4">
                <ul className="space-y-1">
                    {tabs.map((tab) => (
                        <li key={tab.id}>
                            <button
                                onClick={() => onChange(tab.id)}
                                className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-all duration-200 ${activeTab === tab.id
                                        ? 'bg-primary-500/20 text-primary-400 border-l-2 border-primary-500'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
