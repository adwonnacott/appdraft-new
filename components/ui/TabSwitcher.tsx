'use client';

import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export default function TabSwitcher({ tabs, defaultTab, className = '' }: TabSwitcherProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsTransitioning(false);
    }, 200);
  };

  const activeContent = tabs.find(t => t.id === activeTab)?.content;

  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-[#3cd6bf] text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200'
            }`}
          >
            {tab.icon && (
              <span className={`transition-colors ${activeTab === tab.id ? 'text-white' : 'text-gray-400'}`}>
                {tab.icon}
              </span>
            )}
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute inset-0 rounded-xl bg-white/10 animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        className={`transition-all duration-300 ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {activeContent}
      </div>
    </div>
  );
}
