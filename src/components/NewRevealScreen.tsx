import { useEffect, useState } from 'react';

export default function NewRevealScreen({ onComplete }: { onComplete: () => void }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Auto-advance after 5 seconds
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(onComplete, 1500); // 1.5s fade out duration
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`reveal-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="reveal-bg" />
      <div className="reveal-overlay" />
      
      <div className="reveal-content">
        <div className="reveal-heart">🤍</div>
        <p className="reveal-welcome">We are honored to welcome you to the Wedding ceremony of</p>
        
        <div className="reveal-names-container">
          <h2 className="reveal-names">Ravi Teja</h2>
          <span className="reveal-ampersand">&</span>
          <h2 className="reveal-names">Sravya</h2>
        </div>
        
        <div className="reveal-divider">
          <span>∞</span>
          <span className="heart-mini">♥</span>
          <span>∞</span>
        </div>
        
        <p className="reveal-message">
          Join us as we begin our forever, surrounded by love, 
          blessings and the people who mean the world to us.
        </p>
        
        <p className="reveal-closing">
          Your presence will add more joy to our celebration and 
          beautiful memories to cherish for a lifetime.
        </p>
        
        <p className="reveal-special">
          Your presence will make our day truly special.
        </p>
      </div>
      
      {/* Subtle progress indicator */}
      <div className="reveal-progress-bar" />
    </div>
  );
}
