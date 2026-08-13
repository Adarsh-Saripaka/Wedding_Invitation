import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [hiding, setHiding] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate ambient bokeh particles
    const bokeh = Array.from({ length: 25 }).map((_, idx) => ({
      id: idx,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
    }));
    setParticles(bokeh);

    // Increase loader duration to allow the rich sequence to play out
    const timer = setTimeout(() => {
      setHiding(true);
      setTimeout(onComplete, 1200); // Wait for fade out animation
    }, 4500); 
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loader-overlay-rich ${hiding ? 'hidden' : ''}`}>
      {/* Background Image Plate */}
      <div className="loader-bg-plate" />
      <div className="loader-vignette" />

      {/* Drifting Bokeh/Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="loader-bokeh"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Animated Content Sequence */}
      <div className="loader-content-sequence">
        <div className="loader-label">WEDDING INVITATION</div>
        <div className="loader-names">Ravi Teja <span className="loader-names-amp">&</span> Sravya</div>
        <div className="loader-divider-rich" />
      </div>
    </div>
  );
}
