import { useState, useEffect, useCallback } from 'react';
import { ambientMusic } from '../utils/audio';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

interface Sparkle {
  id: number;
  top: number;
  left: number;
  delay: number;
  size: number;
}

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export default function Envelope({ isOpen, onOpen, isMuted }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isCracked, setIsCracked] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [petals, setPetals] = useState<Petal[]>([]);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Generate sparkle coordinates for ambient golden dust
    const items = Array.from({ length: 35 }).map((_, idx) => ({
      id: idx,
      top: Math.random() * 90 + 5,
      left: Math.random() * 90 + 5,
      delay: Math.random() * 5,
      size: Math.random() * 14 + 5,
    }));
    setSparkles(items);

    // Generate floating rose petals
    const petalItems = Array.from({ length: 18 }).map((_, idx) => ({
      id: idx,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 6,
      size: 10 + Math.random() * 14,
      rotation: Math.random() * 360,
    }));
    setPetals(petalItems);

    // Show hint text after a moment
    const hintTimer = setTimeout(() => setShowHint(true), 1500);
    return () => clearTimeout(hintTimer);
  }, []);

  const handleOpen = useCallback(() => {
    if (isOpening || isCracked || isOpen) return;
    setIsCracked(true);

    // Initialize audio loops
    ambientMusic.start();
    ambientMusic.setMute(isMuted);

    // Delay the flap opening to let the seal crack animation play
    setTimeout(() => {
      setIsOpening(true);
      
      // Trigger open state in parent component as flap opens and light converges inward
      setTimeout(() => {
        onOpen();
      }, 1400);
    }, 400); // 400ms for crack animation
  }, [isOpening, isCracked, isOpen, isMuted, onOpen]);

  const activeOpenState = isOpen || isOpening;

  return (
    <div className={`envelope-screen ${isOpen ? 'opened-flow-state' : ''}`}>
      {/* Background Radial Glow */}
      <div className="envelope-bg-glow" />
      <div className="envelope-bg-glow-2" />

      {/* Floating Sparkles (Golden Dust) */}
      {!isOpen && sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="envelope-sparkle"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            fontSize: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            color: 'rgba(217, 196, 142, 0.4)',
          }}
        >
          ✦
        </span>
      ))}

      {/* Floating Rose Petals */}
      {petals.map((petal) => (
        <span
          key={`petal-${petal.id}`}
          className="envelope-petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            fontSize: `${petal.size}px`,
            '--petal-rotation': `${petal.rotation}deg`,
          } as React.CSSProperties}
        >
          🌸
        </span>
      ))}

      {/* Top decorative text */}
      <div className={`envelope-top-text ${showHint && !activeOpenState ? 'visible' : ''}`}>
        <span className="envelope-ornament">✧ ❦ ✧</span>
        <p className="envelope-tagline">A celebration of love awaits</p>
      </div>

      {/* Ground shadow beneath envelope */}
      <div className={`envelope-ground-shadow ${activeOpenState ? 'fade-out' : ''}`} />

      {/* Outer Envelope Wrapper (Solid & 100% Opaque) */}
      <div className={`envelope-container ${activeOpenState ? 'open' : ''}`}>
        {/* Envelope shimmer overlay */}
        <div className="envelope-shimmer" />

        {/* Paper texture overlay */}
        <div className="envelope-texture" />

        {/* Envelope Back Plate (Deep Velvet Burgundy pocket back) */}
        <div className="envelope-back">
          {/* Decorative corner flourishes — more ornate */}
          <span className="envelope-corner-flourish top-left">❧</span>
          <span className="envelope-corner-flourish top-right">❧</span>
          <span className="envelope-corner-flourish bottom-left">❧</span>
          <span className="envelope-corner-flourish bottom-right">❧</span>
          
          {/* Inner ornate frame */}
          <div className="envelope-inner-frame" />
        </div>

        {/* Envelope Flap (Top Triangle with ornate gold pattern) */}
        <div className="envelope-flap">
          <svg className="flap-svg" viewBox="0 0 100 50" preserveAspectRatio="none">
            {/* Solid velvet top fold with rich gradient */}
            <defs>
              <linearGradient id="flapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7A1F2B" />
                <stop offset="30%" stopColor="#6A1A24" />
                <stop offset="60%" stopColor="#5A131C" />
                <stop offset="100%" stopColor="#4A0E16" />
              </linearGradient>
              <linearGradient id="flapSheen" x1="0%" y1="0%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
              </linearGradient>
            </defs>
            <polygon points="0,0 50,48 100,0" fill="url(#flapGrad)" />
            <polygon points="0,0 50,48 100,0" fill="url(#flapSheen)" />
            {/* Ornate Gold Foil Flap Border — double line */}
            <polyline points="1,0 50,47 99,0" stroke="#D4AF37" strokeWidth="0.9" fill="none" strokeOpacity="0.9" />
            <polyline points="3,0 50,45 97,0" stroke="#C9A24B" strokeWidth="0.4" fill="none" strokeOpacity="0.5" />
            {/* Inner decorative filigree line */}
            <polyline points="8,0 50,38 92,0" stroke="#D9C48E" strokeWidth="0.25" fill="none" strokeOpacity="0.35" />
            {/* Center diamond accent */}
            <polygon points="50,30 52,33 50,36 48,33" fill="#D4AF37" fillOpacity="0.4" />
          </svg>
          {/* Wax seal on flap */}
          <div className="flap-seal-decoration">❦</div>
        </div>

        {/* Envelope Front Flaps (Left, Right and Bottom pocket overlay - 100% solid opacity) */}
        <div className="envelope-front">
          <svg className="front-svg" viewBox="0 0 100 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="leftFold" x1="0%" y1="0%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#5A131C" />
                <stop offset="60%" stopColor="#4A0E16" />
                <stop offset="100%" stopColor="#420B11" />
              </linearGradient>
              <linearGradient id="rightFold" x1="100%" y1="0%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#5A131C" />
                <stop offset="60%" stopColor="#4A0E16" />
                <stop offset="100%" stopColor="#420B11" />
              </linearGradient>
              <linearGradient id="bottomFold" x1="50%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#2D060A" />
                <stop offset="100%" stopColor="#36080D" />
              </linearGradient>
            </defs>
            {/* Left fold - 100% solid with depth shading */}
            <polygon points="0,0 50,30 0,60" fill="url(#leftFold)" opacity="1" />
            <polyline points="0,1 48,30 0,59" stroke="#D4AF37" strokeWidth="0.6" fill="none" strokeOpacity="0.5" />
            <polyline points="0,2 46,30 0,58" stroke="#C9A24B" strokeWidth="0.2" fill="none" strokeOpacity="0.2" />

            {/* Right fold - 100% solid with depth shading */}
            <polygon points="100,0 50,30 100,60" fill="url(#rightFold)" opacity="1" />
            <polyline points="100,1 52,30 100,59" stroke="#D4AF37" strokeWidth="0.6" fill="none" strokeOpacity="0.5" />
            <polyline points="100,2 54,30 100,58" stroke="#C9A24B" strokeWidth="0.2" fill="none" strokeOpacity="0.2" />

            {/* Bottom fold - 100% solid */}
            <polygon points="0,60 50,28 100,60" fill="url(#bottomFold)" opacity="1" />
            <polyline points="1,59 50,29 99,59" stroke="#D4AF37" strokeWidth="0.7" fill="none" strokeOpacity="0.6" />
            <polyline points="3,59 50,31 97,59" stroke="#C9A24B" strokeWidth="0.25" fill="none" strokeOpacity="0.25" />
          </svg>
        </div>

        {/* Premium Wax Seal */}
        <div className={`wax-seal-wrapper ${isCracked ? 'cracked' : ''} ${isOpening ? 'fade-out' : ''}`}>
          <div className="wax-seal-pulse" />
          <div className="wax-seal-glow" />
          <button className="wax-seal" onClick={handleOpen} aria-label="Open wedding invitation envelope">
            <div className="wax-seal-rim" />
            <div className="wax-inner-seal">
              <span className="wax-monogram">R<span className="wax-amp">&</span>S</span>
              <span className="wax-monogram-sub">❦</span>
            </div>
            {isCracked && (
              <>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`wax-crack-particle p-${i}`} />
                ))}
              </>
            )}
          </button>
          <p className="wax-action-label">TAP TO UNSEAL</p>
          <p className="seal-invite-text">YOU ARE INVITED ♡</p>
        </div>

        {/* Transition Inward Converging Light Effect — Premium Cinematic */}
        {isOpening && <div className="gold-inward-converge" />}
        {isOpening && <div className="gold-rays-converge" />}
        {isOpening && (
          <div className="gold-particles-container">
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className="gold-particle"
                style={{
                  '--particle-angle': `${(i * 360) / 14}deg`,
                  '--particle-delay': `${i * 0.06}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}
        {isOpening && <div className="gold-screen-flash" />}
      </div>

      {/* Bottom decorative text */}
      <div className={`envelope-bottom-text ${showHint && !activeOpenState ? 'visible' : ''}`}>
        <p className="envelope-date-hint">26 · 08 · 2026</p>
      </div>
    </div>
  );
}
