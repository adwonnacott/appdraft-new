'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function AnimatedText({
  children,
  className = '',
  delay = 0,
  stagger = 30,
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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

  const words = (children || '').split(' ');

  return (
    <span ref={ref} className={`inline ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden">
          <span
            className="inline-block transition-all duration-500 ease-out"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${delay + wordIndex * stagger}ms`,
            }}
          >
            {word}
            {wordIndex < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </span>
  );
}
