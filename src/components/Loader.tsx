import { useEffect, useState } from 'react';
import GaneshaIcon from './GaneshaIcon';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
      setTimeout(onComplete, 800);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${hiding ? 'hidden' : ''}`}>
      <div className="loader-ganesha">
        <GaneshaIcon size={64} />
      </div>
      <div className="loader-text">Ravi Teja & Sravya</div>
      <div className="loader-line" />
    </div>
  );
}
