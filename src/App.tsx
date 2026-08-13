import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import PersonalNote from './components/PersonalNote';
import ConfirmPresence from './components/ConfirmPresence';
import Events from './components/Events';
import ClosingNote from './components/ClosingNote';
import Envelope from './components/Envelope';
import Gallery from './components/Gallery';
import NewRevealScreen from './components/NewRevealScreen';
import { Volume2, VolumeX } from 'lucide-react';
import { ambientMusic } from './utils/audio';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [isRevealFinished, setIsRevealFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Sync mute state with AmbientSynth player
  useEffect(() => {
    ambientMusic.setMute(isMuted);
  }, [isMuted]);

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // Lock body scroll until reveal is finished
  useEffect(() => {
    if (!isLoading) {
      if (!isRevealFinished) {
        document.body.classList.add('overflow-locked');
      } else {
        document.body.classList.remove('overflow-locked');
      }
    }
    return () => {
      document.body.classList.remove('overflow-locked');
    };
  }, [isRevealFinished, isLoading]);

  return (
    <>
      <Loader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className={`app-root ${isEnvelopeOpened ? 'envelope-is-opened' : 'envelope-is-locked'} ${isRevealFinished ? 'reveal-is-finished' : ''}`}>
          {/* Persistent top-right speaker toggle for unmuted audio feedback */}
          <button
            className="envelope-audio-toggle"
            onClick={handleToggleMute}
            aria-label="Toggle Audio"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          {/* Envelope Section (Replaces Hero section and remains at top) */}
          <Envelope
            isOpen={isEnvelopeOpened}
            onOpen={() => setIsEnvelopeOpened(true)}
            isMuted={isMuted}
            onToggleMute={handleToggleMute}
          />

          {/* Reveal Screen (Transitions from Envelope to Main Content) */}
          {isEnvelopeOpened && !isRevealFinished && (
            <NewRevealScreen onComplete={() => setIsRevealFinished(true)} />
          )}

          {/* The main scrollable content revealed after opening */}
          <div className="main-content-flow">
            <Navbar />
            
            <WelcomeSection />

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
        </div>
      )}
    </>
  );
}

export default App;
