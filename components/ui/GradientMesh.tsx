'use client';

import { useEffect, useRef } from 'react';

interface GradientMeshProps {
  className?: string;
  colors?: string[];
  speed?: number;
  interactive?: boolean;
}

export default function GradientMesh({
  className = '',
  colors = ['#c7d2fe', '#a5f3fc', '#ddd6fe', '#bae6fd'],
  speed = 0.5,
  interactive = true,
}: GradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Gradient orbs
    const orbs = colors.map((color, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      radius: Math.min(width, height) * (0.3 + Math.random() * 0.2),
      color,
      phase: (i / colors.length) * Math.PI * 2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    let time = 0;
    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Update and draw orbs
      orbs.forEach((orb, i) => {
        // Organic movement
        orb.x += orb.vx + Math.sin(time + orb.phase) * 0.5;
        orb.y += orb.vy + Math.cos(time + orb.phase) * 0.5;

        // Mouse influence
        if (interactive) {
          const dx = mouseRef.current.x - orb.x;
          const dy = mouseRef.current.y - orb.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 300) {
            const force = (300 - dist) / 300 * 0.02;
            orb.x -= dx * force;
            orb.y -= dy * force;
          }
        }

        // Boundary bounce with smooth edges
        if (orb.x < -orb.radius * 0.5) orb.vx = Math.abs(orb.vx);
        if (orb.x > width + orb.radius * 0.5) orb.vx = -Math.abs(orb.vx);
        if (orb.y < -orb.radius * 0.5) orb.vy = Math.abs(orb.vy);
        if (orb.y > height + orb.radius * 0.5) orb.vy = -Math.abs(orb.vy);

        // Draw gradient orb
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        gradient.addColorStop(0, orb.color + '40');
        gradient.addColorStop(0.5, orb.color + '20');
        gradient.addColorStop(1, orb.color + '00');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors, speed, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ filter: 'blur(60px)' }}
    />
  );
}
