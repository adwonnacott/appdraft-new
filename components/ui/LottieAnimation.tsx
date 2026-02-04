'use client';

import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useRef, useState } from 'react';

// Example: Simple checkmark/success animation data
// In production, you'd import this from a .json file
const successAnimationData = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: 'Success Check',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Circle',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.2], y: [1] }, o: { x: [0.8], y: [0] }, t: 0, s: [0, 0, 100] },
            { t: 30, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'el',
          s: { a: 0, k: [120, 120] },
          p: { a: 0, k: [0, 0] },
          nm: 'Circle Path',
        },
        {
          ty: 'st',
          c: { a: 0, k: [0.086, 0.627, 0.522, 1] }, // Salesforce-ish teal
          o: { a: 0, k: 100 },
          w: { a: 0, k: 8 },
          lc: 2,
          lj: 2,
          nm: 'Circle Stroke',
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Checkmark',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ind: 0,
              ty: 'sh',
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-25, 0], [-8, 17], [28, -18]],
                  c: false,
                },
              },
              nm: 'Check Path',
            },
            {
              ty: 'tm',
              s: { a: 0, k: 0 },
              e: {
                a: 1,
                k: [
                  { i: { x: [0.2], y: [1] }, o: { x: [0.8], y: [0] }, t: 25, s: [0] },
                  { t: 50, s: [100] },
                ],
              },
              o: { a: 0, k: 0 },
              m: 1,
              nm: 'Trim Paths',
            },
            {
              ty: 'st',
              c: { a: 0, k: [0.086, 0.627, 0.522, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 10 },
              lc: 2,
              lj: 2,
              nm: 'Check Stroke',
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
          nm: 'Checkmark Group',
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
  ],
};

// Pulsing loader animation data
const loaderAnimationData = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: 'Pulse Loader',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Dot 1',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] }, t: 0, s: [100, 100, 100] },
            { i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] }, t: 15, s: [140, 140, 100] },
            { t: 30, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        { ty: 'el', s: { a: 0, k: [20, 20] }, p: { a: 0, k: [0, 0] }, nm: 'Dot' },
        { ty: 'fl', c: { a: 0, k: [0, 0.44, 0.75, 1] }, o: { a: 0, k: 100 }, nm: 'Fill' },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Dot 2',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] }, t: 10, s: [100, 100, 100] },
            { i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] }, t: 25, s: [140, 140, 100] },
            { t: 40, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        { ty: 'el', s: { a: 0, k: [20, 20] }, p: { a: 0, k: [0, 0] }, nm: 'Dot' },
        { ty: 'fl', c: { a: 0, k: [0, 0.44, 0.75, 1] }, o: { a: 0, k: 100 }, nm: 'Fill' },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'Dot 3',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [140, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] }, t: 20, s: [100, 100, 100] },
            { i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] }, t: 35, s: [140, 140, 100] },
            { t: 50, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        { ty: 'el', s: { a: 0, k: [20, 20] }, p: { a: 0, k: [0, 0] }, nm: 'Dot' },
        { ty: 'fl', c: { a: 0, k: [0, 0.44, 0.75, 1] }, o: { a: 0, k: 100 }, nm: 'Fill' },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
  ],
};

// Animation presets
export const animations = {
  success: successAnimationData,
  loader: loaderAnimationData,
};

export type AnimationType = keyof typeof animations;

interface LottieAnimationProps {
  /** Built-in animation type or custom animation data */
  animation?: AnimationType | object;
  /** Width of the animation */
  width?: number | string;
  /** Height of the animation */
  height?: number | string;
  /** Whether to loop the animation */
  loop?: boolean;
  /** Whether to autoplay the animation */
  autoplay?: boolean;
  /** Playback speed (1 = normal, 2 = 2x speed, etc.) */
  speed?: number;
  /** Additional CSS classes */
  className?: string;
  /** Callback when animation completes */
  onComplete?: () => void;
}

export default function LottieAnimation({
  animation = 'success',
  width = 200,
  height = 200,
  loop = false,
  autoplay = true,
  speed = 1,
  className = '',
  onComplete,
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  // Get animation data - either from presets or use custom data
  const animationData = typeof animation === 'string' ? animations[animation] : animation;

  const handleComplete = () => {
    setIsPlaying(false);
    onComplete?.();
  };

  const replay = () => {
    lottieRef.current?.goToAndPlay(0);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (isPlaying) {
      lottieRef.current?.pause();
    } else {
      lottieRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width, height }}
        onComplete={handleComplete}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
        }}
        initialSegment={undefined}
        onDOMLoaded={() => {
          if (speed !== 1) {
            lottieRef.current?.setSpeed(speed);
          }
        }}
      />

      {/* Optional controls - remove if not needed */}
      <div className="mt-2 flex gap-2">
        <button
          onClick={togglePlay}
          className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300 transition-colors"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={replay}
          className="rounded bg-blue-500 text-white px-3 py-1 text-sm hover:bg-blue-600 transition-colors"
        >
          Replay
        </button>
      </div>
    </div>
  );
}
