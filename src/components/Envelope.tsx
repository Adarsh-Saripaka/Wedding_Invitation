import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { ambientMusic } from '../utils/audio';
import GaneshaIcon from './GaneshaIcon';

interface EnvelopeProps {
  onOpen: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export default function Envelope({ onOpen, isMuted, onToggleMute }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number; top: number; left: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    // Generate sparkle coordinates for ambient golden dust
    const items = Array.from({ length: 25 }).map((_, idx) => ({
      id: idx,
      top: Math.random() * 90 + 5,
      left: Math.random() * 90 + 5,
      delay: Math.random() * 4,
      size: Math.random() * 12 + 6,
    }));
    setSparkles(items);
  }, []);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Initialize audio loops
    ambientMusic.start();
    ambientMusic.setMute(isMuted);

    // Opening animation sequence time
    setTimeout(() => {
      onOpen();
    }, 2200);
  };

  return (
    <div className={`envelope-screen ${isOpening ? 'fade-out' : ''}`}>
      {/* Background Radial Glow */}
      <div className="envelope-bg-glow" />

      {/* Floating Sparkles (Golden Dust) */}
      {sparkles.map((sparkle) => (
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

      {/* Persistent Audio Controls */}
      <button className="envelope-audio-toggle" onClick={onToggleMute} aria-label="Toggle Audio">
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Outer Envelope Wrapper */}
      <div className={`envelope-container ${isOpening ? 'open' : ''}`}>
        {/* Envelope Back Plate (Deep Velvet Burgundy pocket back) */}
        <div className="envelope-back" />

        {/* Envelope Inside Card (Warm ivory invitation slide-up) */}
        <div className="envelope-card-preview">
          <div className="envelope-card-inner">
            <span className="envelope-card-ganesha">
              <GaneshaIcon size={36} />
            </span>
            <p className="envelope-card-eyebrow">WITH THE DIVINE BLESSINGS OF ELDERS</p>
            <h4 className="envelope-card-names">Ravi Teja & Sravya</h4>
            <span className="envelope-card-divider" />
            <p className="envelope-card-date">26th AUGUST 2026</p>
            <p className="envelope-card-location">VIJAYANAGARAM</p>
          </div>
        </div>

        {/* Envelope Flap (Top Triangle with gold vine stamp) */}
        <div className="envelope-flap">
          <svg className="flap-svg" viewBox="0 0 100 50" preserveAspectRatio="none">
            {/* Dark velvet top fold */}
            <polygon points="0,0 50,48 100,0" fill="#5A131C" />
            {/* Subtle Gold Foil Flap Border */}
            <polyline points="2,0 50,46 98,0" stroke="#C9A24B" strokeWidth="0.8" fill="none" strokeOpacity="0.85" />
          </svg>
        </div>

        {/* Envelope Front Flaps (Left, Right and Bottom pocket overlay) */}
        <div className="envelope-front">
          <svg className="front-svg" viewBox="0 0 100 60" preserveAspectRatio="none">
            {/* Left fold */}
            <polygon points="0,0 50,30 0,60" fill="#420B11" opacity="0.95" />
            <polyline points="0,1 48,30 0,59" stroke="#C9A24B" strokeWidth="0.5" fill="none" strokeOpacity="0.4" />

            {/* Right fold */}
            <polygon points="100,0 50,30 100,60" fill="#420B11" opacity="0.95" />
            <polyline points="100,1 52,30 100,59" stroke="#C9A24B" strokeWidth="0.5" fill="none" strokeOpacity="0.4" />

            {/* Bottom fold */}
            <polygon points="0,60 50,28 100,60" fill="#36080D" />
            <polyline points="1,59 50,29 99,59" stroke="#C9A24B" strokeWidth="0.6" fill="none" strokeOpacity="0.5" />
          </svg>
        </div>

        {/* Wax Seal Toggle / Action Button */}
        <div className="wax-seal-wrapper">
          <button className="wax-seal" onClick={handleOpen}>
            <div className="wax-inner-seal">
              <span className="wax-symbol">❦</span>
            </div>
          </button>
          <p className="wax-action-label">TAP TO UNSEAL</p>
          <p className="seal-invite-text">YOU ARE INVITED ♡</p>
        </div>

        {/* Transition Light Burst */}
        {isOpening && <div className="gold-burst-effect" />}
      </div>
    </div>
  );
}
