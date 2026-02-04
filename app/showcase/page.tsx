'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Parallax from '@/components/ui/Parallax';
import CountUp from '@/components/ui/CountUp';

export default function ShowcasePage() {
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringCursor, setIsHoveringCursor] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [progressValue, setProgressValue] = useState(0);
  const [marqueeHovered, setMarqueeHovered] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Typing effect
  const fullText = "This text types itself automatically...";
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        i = 0;
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Progress bar animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgressValue(85);
        }
      },
      { threshold: 0.5 }
    );
    if (progressRef.current) observer.observe(progressRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMagnet = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMagnetPos({ x: x * 0.3, y: y * 0.3 });
  };

  const resetMagnet = () => setMagnetPos({ x: 0, y: 0 });

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Custom cursor follower */}
      <div
        className={`fixed w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ${isHoveringCursor ? 'scale-150 bg-white' : 'bg-white/50'}`}
        style={{
          left: cursorPos.x - 16,
          top: cursorPos.y - 16,
        }}
      />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <Link href="/" className="text-appdraft-accent hover:underline mb-4 inline-block">
          &larr; Back to Homepage
        </Link>
        <h1 className="text-5xl font-bold text-white mb-4">Effects Showcase</h1>
        <p className="text-xl text-gray-400">
          Popular web effects and interactions. Scroll to explore everything available.
        </p>
      </div>

      {/* ============================================ */}
      {/* SECTION 1: GLASSMORPHISM */}
      {/* ============================================ */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">01</span>
            <h2 className="text-3xl font-bold text-white">Glassmorphism</h2>
            <p className="text-gray-400 mt-2">Frosted glass effect - very popular in modern design (Apple, Microsoft)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <code className="text-appdraft-accent text-sm">.glass</code>
              <p className="text-white mt-2">Light frosted glass</p>
            </div>
            <div className="glass-strong p-6 rounded-xl">
              <code className="text-appdraft-accent text-sm">.glass-strong</code>
              <p className="text-white mt-2">Heavy frosted glass</p>
            </div>
            <div className="glass-dark p-6 rounded-xl">
              <code className="text-appdraft-accent text-sm">.glass-dark</code>
              <p className="text-white mt-2">Dark frosted glass</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: GRADIENT TEXT & BORDERS */}
      {/* ============================================ */}
      <section className="py-16 bg-dark-secondary relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">02</span>
            <h2 className="text-3xl font-bold text-white">Gradient Effects</h2>
            <p className="text-gray-400 mt-2">Text and border gradients - used by Stripe, Linear, Vercel</p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-5xl font-bold text-gradient">Gradient Text Effect</p>
              <code className="text-appdraft-accent text-sm mt-2 block">.text-gradient</code>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass gradient-border p-8 rounded-xl">
                <p className="text-white text-lg font-semibold">Hover for gradient border</p>
                <code className="text-appdraft-accent text-sm">.gradient-border</code>
              </div>
              <div className="glass gradient-border p-8 rounded-xl">
                <p className="text-white text-lg font-semibold">Glows coral on hover</p>
                <code className="text-appdraft-accent text-sm">.gradient-border</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: TYPING EFFECT */}
      {/* ============================================ */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">03</span>
            <h2 className="text-3xl font-bold text-white">Typing Effect</h2>
            <p className="text-gray-400 mt-2">Text that types itself - popular on landing pages</p>
          </div>

          <div className="glass p-8 rounded-xl">
            <p className="text-2xl md:text-4xl font-mono text-white">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
            <p className="text-gray-400 mt-4 text-sm">Character by character reveal with blinking cursor</p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: MARQUEE / INFINITE SCROLL */}
      {/* ============================================ */}
      <section className="py-16 bg-dark-secondary relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <span className="text-appdraft-accent text-sm font-mono">04</span>
          <h2 className="text-3xl font-bold text-white">Marquee / Logo Ticker</h2>
          <p className="text-gray-400 mt-2">Auto-scrolling content - used for client logos, testimonials</p>
        </div>

        <div
          className="overflow-hidden py-8"
          onMouseEnter={() => setMarqueeHovered(true)}
          onMouseLeave={() => setMarqueeHovered(false)}
        >
          <div
            className={`flex gap-12 ${marqueeHovered ? '' : 'animate-marquee'}`}
            style={{
              width: 'max-content',
              animation: marqueeHovered ? 'none' : 'marquee 20s linear infinite',
            }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-12">
                {['Salesforce', 'HubSpot', 'Slack', 'Zoom', 'Stripe', 'Notion', 'Figma', 'Linear'].map((logo) => (
                  <div key={`${setIndex}-${logo}`} className="glass px-8 py-4 rounded-lg text-white font-semibold whitespace-nowrap">
                    {logo}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">Hover to pause</p>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: TABS */}
      {/* ============================================ */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">05</span>
            <h2 className="text-3xl font-bold text-white">Tabs</h2>
            <p className="text-gray-400 mt-2">Tabbed content interface - essential for organizing information</p>
          </div>

          <div className="glass rounded-xl overflow-hidden">
            <div className="flex border-b border-white/10">
              {['Features', 'Pricing', 'FAQ'].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === i
                      ? 'text-appdraft-accent border-b-2 border-appdraft-accent bg-white/5'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-6">
              {activeTab === 0 && <p className="text-white">Features content goes here. Describe your product features.</p>}
              {activeTab === 1 && <p className="text-white">Pricing content goes here. Show your pricing tiers.</p>}
              {activeTab === 2 && <p className="text-white">FAQ content goes here. Answer common questions.</p>}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: ACCORDION */}
      {/* ============================================ */}
      <section className="py-16 bg-dark-secondary relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">06</span>
            <h2 className="text-3xl font-bold text-white">Accordion / FAQ</h2>
            <p className="text-gray-400 mt-2">Expandable sections - perfect for FAQs</p>
          </div>

          <div className="space-y-3">
            {[
              { q: 'What is Salesforce implementation?', a: 'Salesforce implementation is the process of setting up and customising Salesforce to meet your specific business needs.' },
              { q: 'How long does implementation take?', a: 'Implementation timeline varies based on complexity, typically ranging from 4-12 weeks for most projects.' },
              { q: 'Do you provide ongoing support?', a: 'Yes, we offer flexible support packages including pay-as-you-go and retained support options.' },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                >
                  <span className="text-white font-medium">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-appdraft-accent transition-transform ${openAccordion === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-4 text-gray-400">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: PROGRESS BARS */}
      {/* ============================================ */}
      <section className="py-16 relative overflow-hidden" ref={progressRef}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">07</span>
            <h2 className="text-3xl font-bold text-white">Progress Bars</h2>
            <p className="text-gray-400 mt-2">Animated fill bars - skills, stats, loading states</p>
          </div>

          <div className="space-y-6">
            {[
              { label: 'Sales Cloud Expertise', value: progressValue, color: 'bg-blue-500' },
              { label: 'Service Cloud Expertise', value: progressValue - 10, color: 'bg-emerald-500' },
              { label: 'Custom Development', value: progressValue - 20, color: 'bg-purple-500' },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-white">{bar.label}</span>
                  <span className="text-appdraft-accent">{bar.value}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${bar.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${bar.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8: SCROLL ANIMATIONS */}
      {/* ============================================ */}
      <section className="py-16 bg-dark-secondary relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">08</span>
            <h2 className="text-3xl font-bold text-white">Scroll Reveal Animations</h2>
            <p className="text-gray-400 mt-2">Elements animate in when scrolling - used everywhere</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {['Fade Up', 'Delay 100ms', 'Delay 200ms', 'Delay 300ms'].map((label, i) => (
              <ScrollReveal key={label} delay={i * 100}>
                <div className="glass p-6 rounded-xl text-center">
                  <p className="text-white">{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <ScrollReveal direction="left">
              <div className="glass p-6 rounded-xl text-center">
                <p className="text-white">From Right</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="none">
              <div className="glass p-6 rounded-xl text-center">
                <p className="text-white">Fade Only</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="glass p-6 rounded-xl text-center">
                <p className="text-white">From Left</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 9: COUNTER ANIMATIONS */}
      {/* ============================================ */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">09</span>
            <h2 className="text-3xl font-bold text-white">Counter Animations</h2>
            <p className="text-gray-400 mt-2">Numbers count up when visible - great for stats</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-appdraft-accent">
                <CountUp end={130} suffix="+" />
              </div>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-emerald-400">
                <CountUp end={99.9} decimals={1} suffix="%" />
              </div>
              <p className="text-gray-400 mt-2">Satisfaction</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-blue-400">
                <CountUp end={5.0} decimals={1} />
              </div>
              <p className="text-gray-400 mt-2">Rating</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-purple-400">
                <CountUp end={15} suffix="+" />
              </div>
              <p className="text-gray-400 mt-2">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10: PARALLAX */}
      {/* ============================================ */}
      <section className="py-32 bg-dark-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <Parallax speed={-0.2} className="absolute top-0 left-1/4 w-64 h-64">
            <div className="w-full h-full bg-appdraft-accent/20 rounded-full blur-[80px]" />
          </Parallax>
          <Parallax speed={-0.1} className="absolute bottom-0 right-1/4 w-96 h-96">
            <div className="w-full h-full bg-appdraft-primary/20 rounded-full blur-[100px]" />
          </Parallax>
          <Parallax speed={-0.15} className="absolute top-1/2 left-1/2 w-48 h-48">
            <div className="w-full h-full bg-purple-500/20 rounded-full blur-[60px]" />
          </Parallax>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">10</span>
            <h2 className="text-3xl font-bold text-white">Parallax Scrolling</h2>
            <p className="text-gray-400 mt-2">Background moves at different speed - creates depth</p>
          </div>

          <div className="glass p-8 rounded-xl">
            <p className="text-white">Scroll up and down to see the colored orbs move at different rates</p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 11: MAGNETIC BUTTON */}
      {/* ============================================ */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">11</span>
            <h2 className="text-3xl font-bold text-white">Magnetic Button</h2>
            <p className="text-gray-400 mt-2">Button follows cursor - subtle interactive delight</p>
          </div>

          <div className="flex justify-center">
            <button
              onMouseMove={handleMagnet}
              onMouseLeave={resetMagnet}
              onMouseEnter={() => setIsHoveringCursor(true)}
              onMouseOut={() => setIsHoveringCursor(false)}
              style={{ transform: `translate(${magnetPos.x}px, ${magnetPos.y}px)` }}
              className="bg-indigo-600 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-glow-lg"
            >
              Hover near me!
            </button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 12: CURSOR FOLLOWER */}
      {/* ============================================ */}
      <section className="py-16 bg-dark-secondary relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">12</span>
            <h2 className="text-3xl font-bold text-white">Custom Cursor</h2>
            <p className="text-gray-400 mt-2">The white circle following your mouse - trendy on creative sites</p>
          </div>

          <div
            className="glass p-12 rounded-xl text-center cursor-none"
            onMouseEnter={() => setIsHoveringCursor(true)}
            onMouseLeave={() => setIsHoveringCursor(false)}
          >
            <p className="text-white text-xl">Hover here to see the cursor effect enlarge</p>
            <p className="text-gray-400 mt-2">The white dot follows your mouse everywhere on this page</p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 13: HOVER CARDS */}
      {/* ============================================ */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">13</span>
            <h2 className="text-3xl font-bold text-white">Hover Effects</h2>
            <p className="text-gray-400 mt-2">Various interactive card states</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <p className="text-white font-semibold">Scale Up</p>
              <p className="text-gray-400 text-sm mt-1">hover:scale-105</p>
            </div>
            <div className="glass p-6 rounded-xl hover-lift cursor-pointer">
              <p className="text-white font-semibold">Lift with Shadow</p>
              <p className="text-gray-400 text-sm mt-1">.hover-lift</p>
            </div>
            <div className="glass p-6 rounded-xl glow-accent-hover transition-all duration-300 cursor-pointer">
              <p className="text-white font-semibold">Glow on Hover</p>
              <p className="text-gray-400 text-sm mt-1">.glow-accent-hover</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="group glass p-6 rounded-xl cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-appdraft-accent/0 to-purple-500/0 group-hover:from-appdraft-accent/20 group-hover:to-purple-500/20 transition-all duration-300" />
              <div className="relative">
                <p className="text-white font-semibold">Gradient Reveal</p>
                <p className="text-gray-400 text-sm mt-1 group-hover:text-white transition-colors">Background gradient appears on hover</p>
              </div>
            </div>
            <div className="group glass p-6 rounded-xl cursor-pointer">
              <p className="text-white font-semibold group-hover:text-appdraft-accent transition-colors">Text Color Change</p>
              <div className="flex items-center mt-2 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all">
                Arrow slides right &rarr;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 14: 3D TILT */}
      {/* ============================================ */}
      <section className="py-16 bg-dark-secondary relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">14</span>
            <h2 className="text-3xl font-bold text-white">3D Tilt Effect</h2>
            <p className="text-gray-400 mt-2">Cards that rotate in 3D space on hover</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            {['Tilt Y Axis', 'Tilt X Axis', 'Combined Tilt'].map((label, i) => (
              <div
                key={label}
                className="glass p-8 rounded-xl transition-transform duration-300 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseEnter={(e) => {
                  if (i === 0) e.currentTarget.style.transform = 'rotateY(15deg)';
                  if (i === 1) e.currentTarget.style.transform = 'rotateX(-15deg)';
                  if (i === 2) e.currentTarget.style.transform = 'rotateX(-10deg) rotateY(10deg) scale(1.05)';
                }}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
              >
                <p className="text-white font-semibold">{label}</p>
                <p className="text-gray-400 text-sm mt-1">Hover to see effect</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 15: SVG PATTERNS */}
      {/* ============================================ */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">15</span>
            <h2 className="text-3xl font-bold text-white">Background Patterns</h2>
            <p className="text-gray-400 mt-2">Subtle patterns created with code (no images)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative glass p-8 rounded-xl overflow-hidden h-48">
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>
              <div className="relative">
                <p className="text-white font-semibold">Dot Grid</p>
                <p className="text-gray-400 text-sm mt-1">Subtle repeating dots</p>
              </div>
            </div>

            <div className="relative glass p-8 rounded-xl overflow-hidden h-48">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <div className="relative">
                <p className="text-white font-semibold">Grid Lines</p>
                <p className="text-gray-400 text-sm mt-1">Technical/blueprint feel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 16: TOOLTIPS */}
      {/* ============================================ */}
      <section className="py-16 bg-dark-secondary relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">16</span>
            <h2 className="text-3xl font-bold text-white">Tooltips</h2>
            <p className="text-gray-400 mt-2">Hover info boxes - essential for UI</p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {['Top', 'Bottom', 'Left', 'Right'].map((pos) => (
              <div key={pos} className="relative group">
                <button className="glass px-6 py-3 rounded-lg text-white">
                  Hover ({pos})
                </button>
                <div className={`absolute ${
                  pos === 'Top' ? 'bottom-full left-1/2 -translate-x-1/2 mb-2' :
                  pos === 'Bottom' ? 'top-full left-1/2 -translate-x-1/2 mt-2' :
                  pos === 'Left' ? 'right-full top-1/2 -translate-y-1/2 mr-2' :
                  'left-full top-1/2 -translate-y-1/2 ml-2'
                } px-3 py-2 bg-white text-dark text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10`}>
                  Tooltip on {pos.toLowerCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 17: FLOATING ANIMATIONS */}
      {/* ============================================ */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">17</span>
            <h2 className="text-3xl font-bold text-white">Floating / Bobbing</h2>
            <p className="text-gray-400 mt-2">Continuous gentle animation - adds life to static elements</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl animate-float">
              <p className="text-white font-semibold">Float (6s)</p>
              <p className="text-gray-400 text-sm mt-1">Standard bob</p>
            </div>
            <div className="glass p-6 rounded-xl animate-float-slow">
              <p className="text-white font-semibold">Float Slow (20s)</p>
              <p className="text-gray-400 text-sm mt-1">Gentle drift</p>
            </div>
            <div className="glass p-6 rounded-xl animate-pulse">
              <p className="text-white font-semibold">Pulse</p>
              <p className="text-gray-400 text-sm mt-1">Opacity pulse</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 18: LOADING SKELETONS */}
      {/* ============================================ */}
      <section className="py-16 bg-dark-secondary relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">18</span>
            <h2 className="text-3xl font-bold text-white">Loading Skeletons</h2>
            <p className="text-gray-400 mt-2">Placeholder animations while content loads</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-xl">
              <p className="text-white font-semibold mb-4">Shimmer Effect</p>
              <div className="space-y-3">
                <div className="h-4 bg-white/10 rounded animate-shimmer" />
                <div className="h-4 bg-white/10 rounded animate-shimmer w-3/4" />
                <div className="h-4 bg-white/10 rounded animate-shimmer w-1/2" />
              </div>
            </div>
            <div className="glass p-6 rounded-xl">
              <p className="text-white font-semibold mb-4">Card Skeleton</p>
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-lg animate-pulse" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-white/10 rounded animate-pulse" />
                  <div className="h-4 bg-white/10 rounded animate-pulse w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 19: IMAGE EFFECTS */}
      {/* ============================================ */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">19</span>
            <h2 className="text-3xl font-bold text-white">Image Effects</h2>
            <p className="text-gray-400 mt-2">Various treatments for images - hover, filters, overlays</p>
          </div>

          {/* Row 1: Basic hover effects */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Zoom on hover */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Zoom on Hover</p>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/uploads/2022/02/processmap.png"
                  alt="Process Map"
                  className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <code className="text-appdraft-accent text-xs mt-2 block">hover:scale-110</code>
            </div>

            {/* Grayscale to color */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Grayscale to Color</p>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/uploads/2022/02/reporting.png"
                  alt="Reporting"
                  className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <code className="text-appdraft-accent text-xs mt-2 block">grayscale hover:grayscale-0</code>
            </div>

            {/* Blur to clear */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Blur to Clear</p>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/uploads/2022/02/roi.png"
                  alt="ROI"
                  className="w-full h-40 object-cover blur-sm hover:blur-0 transition-all duration-500"
                />
              </div>
              <code className="text-appdraft-accent text-xs mt-2 block">blur-sm hover:blur-0</code>
            </div>
          </div>

          {/* Row 2: Overlay effects */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Gradient overlay */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Gradient Overlay on Hover</p>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="/uploads/2022/02/payback.png"
                  alt="Payback"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-appdraft-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">Content appears on hover</p>
                </div>
              </div>
              <code className="text-appdraft-accent text-xs mt-2 block">group-hover:opacity-100</code>
            </div>

            {/* Dark overlay with text */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Dark Overlay + Scale</p>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="/uploads/2022/02/datatransfer-768x320.png"
                  alt="Data Transfer"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-xl">View Details</p>
                    <p className="text-gray-300 text-sm">Click to learn more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Frame and border effects */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Glowing border */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Glowing Border</p>
              <div className="rounded-lg overflow-hidden p-1 bg-gradient-to-r from-appdraft-accent to-purple-500 hover:shadow-glow-lg transition-shadow duration-300">
                <img
                  src="/uploads/2022/02/processmap-1.png"
                  alt="Process"
                  className="w-full h-32 object-cover rounded-md"
                />
              </div>
            </div>

            {/* Lift with shadow */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Lift with Shadow</p>
              <div className="rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <img
                  src="/uploads/2022/02/processmap2.png"
                  alt="Process 2"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>

            {/* Rotate on hover */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Subtle Rotate</p>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/uploads/2022/02/Untitled-design-27.png"
                  alt="Design"
                  className="w-full h-32 object-cover transition-transform duration-500 hover:rotate-2 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Row 4: Advanced effects */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Split reveal */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Brightness + Contrast on Hover</p>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/uploads/2022/04/2022-04-19_12-49-29.png"
                  alt="Screenshot"
                  className="w-full h-48 object-cover brightness-75 hover:brightness-110 hover:contrast-110 transition-all duration-500"
                />
              </div>
              <code className="text-appdraft-accent text-xs mt-2 block">brightness-75 hover:brightness-110</code>
            </div>

            {/* Sepia to normal */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Sepia to Normal</p>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/uploads/2022/03/Untitled-design-32.png"
                  alt="Design"
                  className="w-full h-48 object-contain sepia hover:sepia-0 transition-all duration-500"
                />
              </div>
              <code className="text-appdraft-accent text-xs mt-2 block">sepia hover:sepia-0</code>
            </div>
          </div>

          {/* Row 5: Image gallery/grid effects */}
          <div className="mb-8">
            <p className="text-white font-semibold mb-3">Image Grid with Hover Reveal</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                '/uploads/2022/02/processmap.png',
                '/uploads/2022/02/reporting.png',
                '/uploads/2022/02/roi.png',
                '/uploads/2022/02/payback.png',
              ].map((src, i) => (
                <div key={i} className="relative group aspect-square overflow-hidden rounded-lg cursor-pointer">
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-sm font-medium">Image {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 6: Clip paths and shapes */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Circle clip */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Circle Clip</p>
              <div className="flex justify-center">
                <img
                  src="/uploads/2022/02/processmap.png"
                  alt="Circle"
                  className="w-32 h-32 object-cover rounded-full ring-4 ring-appdraft-accent/50 hover:ring-appdraft-accent transition-all duration-300"
                />
              </div>
            </div>

            {/* Hexagon-ish with clip-path */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Custom Shape (Clip Path)</p>
              <div className="flex justify-center">
                <img
                  src="/uploads/2022/02/reporting.png"
                  alt="Hexagon"
                  className="w-32 h-32 object-cover hover:scale-110 transition-transform duration-300"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />
              </div>
            </div>

            {/* Blob shape */}
            <div className="glass p-4 rounded-xl">
              <p className="text-white font-semibold mb-3">Blob Shape</p>
              <div className="flex justify-center">
                <img
                  src="/uploads/2022/02/roi.png"
                  alt="Blob"
                  className="w-32 h-32 object-cover hover:scale-110 transition-transform duration-300"
                  style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 20: IMAGE CARDS & LAYOUTS */}
      {/* ============================================ */}
      <section className="py-16 bg-dark-secondary relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-appdraft-accent text-sm font-mono">20</span>
            <h2 className="text-3xl font-bold text-white">Image Card Layouts</h2>
            <p className="text-gray-400 mt-2">Common patterns for image + text combinations</p>
          </div>

          {/* Feature card with side image */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group glass rounded-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 overflow-hidden">
                <img
                  src="/uploads/2022/04/2022-04-19_12-49-29.png"
                  alt="Feature"
                  className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-appdraft-accent transition-colors">Side Image Card</h3>
                <p className="text-gray-400 text-sm">Perfect for features, testimonials, or blog previews. Image scales on hover.</p>
              </div>
            </div>

            {/* Vertical card */}
            <div className="group glass rounded-2xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/uploads/2022/02/Untitled-design-27.png"
                  alt="Vertical"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-appdraft-accent transition-colors">Vertical Image Card</h3>
                <p className="text-gray-400 text-sm">Classic blog/portfolio card layout with image on top.</p>
              </div>
            </div>
          </div>

          {/* Full-width hero style */}
          <div className="relative rounded-2xl overflow-hidden h-64 group">
            <img
              src="/uploads/2022/02/datatransfer-768x320.png"
              alt="Hero"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent flex items-center">
              <div className="p-8 max-w-lg">
                <h3 className="text-3xl font-bold text-white mb-2">Full-Width Hero Image</h3>
                <p className="text-gray-300 mb-4">With gradient overlay for text readability. Great for page headers.</p>
                <button className="bg-appdraft-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-appdraft-accent-light transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-2xl text-white font-bold mb-2">That&apos;s everything!</p>
          <p className="text-gray-400 mb-8">20 effect categories ready to use on your site</p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 hover:shadow-glow transition-all duration-300"
          >
            Back to Homepage
          </Link>
        </div>
      </section>

      {/* Add marquee keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
