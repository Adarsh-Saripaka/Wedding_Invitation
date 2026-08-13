import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PersonalNote from './components/PersonalNote';
import ConfirmPresence from './components/ConfirmPresence';
import Events from './components/Events';
import ClosingNote from './components/ClosingNote';
import Envelope from './components/Envelope';
import Gallery from './components/Gallery';
import { Volume2, VolumeX } from 'lucide-react';
import { ambientMusic } from './utils/audio';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Sync mute state with AmbientSynth player
  useEffect(() => {
    ambientMusic.setMute(isMuted);
  }, [isMuted]);

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <>
      <Loader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && !isEnvelopeOpened && (
        <Envelope
          onOpen={() => setIsEnvelopeOpened(true)}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
        />
      )}

      {!isLoading && isEnvelopeOpened && (
        <div style={{ animation: 'fadeIn 1.2s ease' }}>
          {/* Persistent top-right speaker toggle for unmuted audio feedback */}
          <button
            className="envelope-audio-toggle"
            onClick={handleToggleMute}
            aria-label="Toggle Audio"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          <Navbar />
          <Hero />
          
          <div className="section-full">
            <PersonalNote />
          </div>

          <div className="botanical-divider">
            <span className="stem" />
            <span className="leaf">✿</span>
            <span className="stem" />
          </div>

          <div className="section-full">
            <ConfirmPresence />
          </div>

          <Events />

          <div className="botanical-divider">
            <span className="stem" />
            <span className="leaf">✿</span>
            <span className="stem" />
          </div>

          <Gallery />


          <div className="botanical-divider">
            <span className="stem" />
            <span className="leaf">✿</span>
            <span className="stem" />
          </div>


          <ClosingNote />

          <footer className="footer">
            <h4 className="footer-names">Ravi Teja & Sravya</h4>
            <p className="footer-text">
              © {new Date().getFullYear()} • Made with love for our special day
            </p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
