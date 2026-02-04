'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

// Brand rainbow colors for visual interest
const brandColors = ['#19779b', '#3cd6bf', '#f25c54', '#f5a623'];

interface AccordionItem {
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: number[];
  className?: string;
}

export default function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = '',
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>(defaultOpen);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  const isOpen = (index: number) => openItems.includes(index);

  const getColor = (index: number) => brandColors[index % brandColors.length];

  return (
    <div className={className}>
      {/* Desktop: Two-column tabbed layout */}
      <ScrollReveal className="hidden lg:block">
        <div className="grid grid-cols-[320px_1fr] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-card">
          {/* Left: Title list */}
          <div className="border-r border-gray-200 bg-gray-50/30">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative w-full text-left p-5 border-b border-gray-100 last:border-b-0 transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-white'
                    : 'hover:bg-white/70'
                }`}
              >
                {/* Colored left border - thicker for better visibility */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundColor: getColor(index) }}
                />

                {/* Number badge */}
                <span
                  className={`text-xs font-mono mb-1 block transition-colors duration-300 ${
                    activeIndex === index ? '' : 'opacity-40'
                  }`}
                  style={{ color: getColor(index) }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Title */}
                <span
                  className={`font-semibold leading-snug block transition-colors duration-300 ${
                    activeIndex === index ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Content panel - vertically centered */}
          <div className="p-8 flex items-center min-h-[280px]">
            <div className="text-gray-600 leading-relaxed text-lg">
              {typeof items[activeIndex].content === 'string' ? (
                <p>{items[activeIndex].content}</p>
              ) : (
                items[activeIndex].content
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Mobile: Accordion layout */}
      <div className="lg:hidden space-y-3">
        {items.map((item, index) => (
          <ScrollReveal key={index} delay={index * 0.05}>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-300">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-[#3cd6bf]/20 focus:ring-inset"
                aria-expanded={isOpen(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{item.title}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${
                    isOpen(index) ? 'rotate-180 bg-[#3cd6bf]/10' : ''
                  }`}
                >
                  <svg
                    className={`w-5 h-5 transition-colors ${isOpen(index) ? 'text-[#3cd6bf]' : 'text-gray-500'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
