'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedText from '@/components/ui/AnimatedText';
import CountUp from '@/components/ui/CountUp';
import GlowCard from '@/components/ui/GlowCard';
import Parallax from '@/components/ui/Parallax';
import GradientMesh from '@/components/ui/GradientMesh';
import LottieAnimation from '@/components/ui/LottieAnimation';

export default function AnimationDemoPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [typedText, setTypedText] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);

  // Typing effect demo
  const fullText = "Building Salesforce solutions that scale...";
  useEffect(() => {
    if (!isPlaying) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        setTimeout(() => { i = 0; }, 2000);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const sections = [
    { id: 'hero', label: 'Hero Animations' },
    { id: 'scroll', label: 'Scroll Reveal' },
    { id: 'interactive', label: 'Interactive Cards' },
    { id: 'text', label: 'Text Effects' },
    { id: 'counters', label: 'Counter Animation' },
    { id: 'lottie', label: 'Lottie Animations' },
    { id: 'backgrounds', label: 'Background Effects' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="fixed top-24 right-6 z-50 hidden lg:block">
        <div className="glass-dark rounded-xl p-3 space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setActiveSection(section.id)}
              className={`block px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-appdraft-accent text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>

      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-appdraft-accent hover:underline mb-6 inline-flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Homepage
          </Link>

          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-appdraft-accent/10 text-appdraft-accent border border-appdraft-accent/20 mb-6">
              Animation System
            </span>
          </ScrollReveal>

          <AnimatedText className="text-4xl md:text-6xl font-bold text-white mb-4">
            Custom Animation Components
          </AnimatedText>

          <ScrollReveal delay={300}>
            <p className="text-xl text-gray-400 max-w-2xl">
              All animations built with vanilla React, CSS, and Canvas. No external animation libraries required.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex gap-4 mt-8">
              <Link
                href="/showcase"
                className="bg-appdraft-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-appdraft-accent-light transition-colors"
              >
                View Full Showcase
              </Link>
              <a
                href="#scroll"
                className="glass px-6 py-3 rounded-xl font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore Components
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 1: HERO ANIMATIONS */}
      {/* ============================================ */}
      <section id="hero" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <GradientMesh />
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12">
            <span className="text-appdraft-accent text-sm font-mono mb-2 block">01</span>
            <h2 className="text-3xl font-bold text-white mb-2">Hero Animations</h2>
            <p className="text-gray-400">Animated gradient mesh background + word-by-word text reveal</p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-30">
              <GradientMesh />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">Available for projects</span>
              </div>

              <AnimatedText className="text-3xl md:text-4xl font-bold text-white">
                Enterprise Salesforce Solutions
              </AnimatedText>

              <p className="text-gray-400 max-w-lg">
                The <code className="text-appdraft-accent">AnimatedText</code> component reveals each word sequentially,
                while <code className="text-appdraft-accent">GradientMesh</code> creates the animated background orbs.
              </p>
            </div>
          </div>

          <div className="mt-6 glass-dark rounded-xl p-4">
            <p className="text-sm text-gray-400 font-mono">
              {'<AnimatedText text="Your headline" />'}
              <br />
              {'<GradientMesh />'}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: SCROLL REVEAL */}
      {/* ============================================ */}
      <section id="scroll" className="py-20 bg-dark-secondary">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12">
            <span className="text-appdraft-accent text-sm font-mono mb-2 block">02</span>
            <h2 className="text-3xl font-bold text-white mb-2">Scroll Reveal</h2>
            <p className="text-gray-400">Elements animate in as they enter the viewport</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {['Fade Up', 'Delay 100ms', 'Delay 200ms', 'Delay 300ms'].map((label, i) => (
              <ScrollReveal key={label} delay={i * 100}>
                <div className="glass p-6 rounded-xl text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-appdraft-accent/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-appdraft-accent font-bold">{i + 1}</span>
                  </div>
                  <p className="text-white font-medium">{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <ScrollReveal direction="right">
              <div className="glass p-6 rounded-xl text-center">
                <p className="text-white font-medium">From Left</p>
                <p className="text-gray-400 text-sm mt-1">direction=&quot;right&quot;</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="none">
              <div className="glass p-6 rounded-xl text-center">
                <p className="text-white font-medium">Fade Only</p>
                <p className="text-gray-400 text-sm mt-1">direction=&quot;none&quot;</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="glass p-6 rounded-xl text-center">
                <p className="text-white font-medium">From Right</p>
                <p className="text-gray-400 text-sm mt-1">direction=&quot;left&quot;</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-6 glass-dark rounded-xl p-4">
            <p className="text-sm text-gray-400 font-mono">
              {'<ScrollReveal delay={200} direction="up">'}
              <br />
              {'  <YourComponent />'}
              <br />
              {'</ScrollReveal>'}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: INTERACTIVE GLOW CARDS */}
      {/* ============================================ */}
      <section id="interactive" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12">
            <span className="text-appdraft-accent text-sm font-mono mb-2 block">03</span>
            <h2 className="text-3xl font-bold text-white mb-2">Interactive Glow Cards</h2>
            <p className="text-gray-400">Mouse-tracking glow effect that follows cursor movement</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <GlowCard className="p-8 rounded-2xl h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fast Performance</h3>
                <p className="text-gray-400 text-sm">
                  Move your cursor over this card to see the glow effect follow your mouse.
                </p>
              </GlowCard>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <GlowCard glowColor="rgba(168, 85, 247, 0.4)" className="p-8 rounded-2xl h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Colors</h3>
                <p className="text-gray-400 text-sm">
                  This card uses a purple glow. Pass any color via the glowColor prop.
                </p>
              </GlowCard>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <GlowCard glowColor="rgba(16, 185, 129, 0.4)" className="p-8 rounded-2xl h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Emerald Variant</h3>
                <p className="text-gray-400 text-sm">
                  The glow uses a radial gradient that updates in real-time.
                </p>
              </GlowCard>
            </ScrollReveal>
          </div>

          <div className="mt-6 glass-dark rounded-xl p-4">
            <p className="text-sm text-gray-400 font-mono">
              {'<GlowCard glowColor="rgba(242, 92, 84, 0.4)">'}
              <br />
              {'  <YourCardContent />'}
              <br />
              {'</GlowCard>'}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: TEXT EFFECTS */}
      {/* ============================================ */}
      <section id="text" className="py-20 bg-dark-secondary">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12">
            <span className="text-appdraft-accent text-sm font-mono mb-2 block">04</span>
            <h2 className="text-3xl font-bold text-white mb-2">Text Effects</h2>
            <p className="text-gray-400">Animated text reveals and typing effects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="glass p-8 rounded-2xl h-full">
                <h3 className="text-lg font-semibold text-white mb-4">Word-by-Word Reveal</h3>
                <div className="min-h-[80px]">
                  <AnimatedText className="text-2xl font-bold text-white" stagger={150}>
                    Each word animates in sequentially
                  </AnimatedText>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Uses staggered opacity and transform animations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass p-8 rounded-2xl h-full">
                <h3 className="text-lg font-semibold text-white mb-4">Typing Effect</h3>
                <div className="min-h-[80px]">
                  <p className="text-2xl font-mono text-white">
                    {typedText}
                    <span className="animate-pulse text-appdraft-accent">|</span>
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-sm text-appdraft-accent hover:underline"
                  >
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>
                  <p className="text-gray-400 text-sm">
                    Character-by-character reveal with cursor.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-6 glass p-8 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">Gradient Text</h3>
              <p className="text-5xl font-bold text-gradient">
                Animated Gradient Text
              </p>
              <p className="text-gray-400 text-sm mt-4">
                Uses <code className="text-appdraft-accent">text-gradient</code> class with animated background position.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: COUNTER ANIMATIONS */}
      {/* ============================================ */}
      <section id="counters" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12">
            <span className="text-appdraft-accent text-sm font-mono mb-2 block">05</span>
            <h2 className="text-3xl font-bold text-white mb-2">Counter Animations</h2>
            <p className="text-gray-400">Numbers that count up when scrolled into view</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollReveal delay={0}>
              <GlowCard className="p-6 rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold text-appdraft-accent mb-2">
                  <CountUp end={130} suffix="+" />
                </div>
                <p className="text-gray-400">Projects Delivered</p>
              </GlowCard>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <GlowCard glowColor="rgba(16, 185, 129, 0.4)" className="p-6 rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                  <CountUp end={15} suffix="+" />
                </div>
                <p className="text-gray-400">Years Experience</p>
              </GlowCard>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <GlowCard glowColor="rgba(59, 130, 246, 0.4)" className="p-6 rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  <CountUp end={5.0} decimals={1} />
                </div>
                <p className="text-gray-400">AppExchange Rating</p>
              </GlowCard>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <GlowCard glowColor="rgba(168, 85, 247, 0.4)" className="p-6 rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  <CountUp end={99.9} decimals={1} suffix="%" />
                </div>
                <p className="text-gray-400">Satisfaction Rate</p>
              </GlowCard>
            </ScrollReveal>
          </div>

          <div className="mt-6 glass-dark rounded-xl p-4">
            <p className="text-sm text-gray-400 font-mono">
              {'<CountUp end={130} suffix="+" />'}
              <br />
              {'<CountUp end={99.9} decimals={1} suffix="%" />'}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: LOTTIE ANIMATIONS */}
      {/* ============================================ */}
      <section id="lottie" className="py-20 bg-dark-secondary">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12">
            <span className="text-appdraft-accent text-sm font-mono mb-2 block">06</span>
            <h2 className="text-3xl font-bold text-white mb-2">Lottie Animations</h2>
            <p className="text-gray-400">Vector animations from After Effects / LottieFiles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="glass p-8 rounded-2xl text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Success Animation</h3>
                <div className="flex justify-center">
                  <LottieAnimation
                    animation="success"
                    width={120}
                    height={120}
                    loop={false}
                  />
                </div>
                <p className="text-gray-400 text-sm mt-4">One-time play with controls</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass p-8 rounded-2xl text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Loading Animation</h3>
                <div className="flex justify-center">
                  <LottieAnimation
                    animation="loader"
                    width={120}
                    height={120}
                    loop={true}
                  />
                </div>
                <p className="text-gray-400 text-sm mt-4">Continuous loop for loading states</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass p-8 rounded-2xl text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Speed Control</h3>
                <div className="flex justify-center">
                  <LottieAnimation
                    animation="success"
                    width={120}
                    height={120}
                    loop={true}
                    speed={0.5}
                  />
                </div>
                <p className="text-gray-400 text-sm mt-4">0.5x speed for subtle effect</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-8 glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-3">Where to get Lottie animations</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-appdraft-accent">→</span>
                  <div>
                    <p className="text-white font-medium">LottieFiles.com</p>
                    <p className="text-gray-400">Free and premium animation library</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-appdraft-accent">→</span>
                  <div>
                    <p className="text-white font-medium">After Effects + Bodymovin</p>
                    <p className="text-gray-400">Create custom animations</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: BACKGROUND EFFECTS */}
      {/* ============================================ */}
      <section id="backgrounds" className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12">
            <span className="text-appdraft-accent text-sm font-mono mb-2 block">07</span>
            <h2 className="text-3xl font-bold text-white mb-2">Background Effects</h2>
            <p className="text-gray-400">Parallax scrolling and interactive canvas backgrounds</p>
          </div>

          {/* Parallax Demo */}
          <div className="relative h-80 rounded-2xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-secondary to-dark">
              <Parallax speed={-0.2} className="absolute top-10 left-1/4">
                <div className="w-48 h-48 bg-appdraft-accent/20 rounded-full blur-[60px]" />
              </Parallax>
              <Parallax speed={-0.1} className="absolute bottom-10 right-1/4">
                <div className="w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
              </Parallax>
              <Parallax speed={-0.15} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-[40px]" />
              </Parallax>
            </div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-white mb-2">Parallax Background</p>
                <p className="text-gray-400">Scroll to see elements move at different speeds</p>
              </div>
            </div>
          </div>

          {/* Glassmorphism */}
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="glass p-6 rounded-xl text-center">
                <code className="text-appdraft-accent text-sm">.glass</code>
                <p className="text-white mt-2">Light frosted glass</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="glass-strong p-6 rounded-xl text-center">
                <code className="text-appdraft-accent text-sm">.glass-strong</code>
                <p className="text-white mt-2">Heavy frosted glass</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="glass-dark p-6 rounded-xl text-center">
                <code className="text-appdraft-accent text-sm">.glass-dark</code>
                <p className="text-white mt-2">Dark frosted glass</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-50">
          <GradientMesh />
        </div>

        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to explore more?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              The showcase page contains 20 additional effect categories including tabs, accordions, tooltips, image effects, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/showcase"
                className="bg-appdraft-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-appdraft-accent-light transition-colors inline-flex items-center justify-center gap-2"
              >
                View Full Showcase
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/"
                className="glass text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Back to Homepage
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
