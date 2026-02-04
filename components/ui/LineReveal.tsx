'use client';

import { useEffect, useRef, useState } from 'react';

interface LineRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export default function LineReveal({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.1,
  as: Component = 'span'
}: LineRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split text into words
  const words = children.split(' ');

  return (
    <Component ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <span
            className={`inline-block transition-all duration-500 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            }`}
            style={{
              transitionDelay: `${delay + index * staggerDelay}s`
            }}
          >
            {word}
            {index < words.length - 1 && '\u00A0'}
          </span>
        </span>
      ))}
    </Component>
  );
}
