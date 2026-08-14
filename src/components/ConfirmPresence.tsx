import ScrollReveal from './ScrollReveal';

export default function ConfirmPresence() {
  return (
    <section className="confirm-section" id="presence">
      <ScrollReveal>
        <div className="confirm-card">
          <div className="confirm-card-corner top-left">❧</div>
          <div className="confirm-card-corner top-right">❧</div>
          <div className="confirm-card-corner bottom-left">❧</div>
          <div className="confirm-card-corner bottom-right">❧</div>
          <div className="confirm-watermark-bg" />

          <span className="confirm-ornament">✧ ❀ ✧</span>
          <h2 className="confirm-heading">Confirming Your Presence</h2>
          <div className="confirm-divider-line" />
          
          <p className="confirm-text">
            at my Wedding and in addition with that, I am expecting you to attend
            the other below events, at which your aura can add some vibe and make
            the situations even more Blissful.
          </p>
          
          <div className="confirm-flourish">❦</div>
        </div>
      </ScrollReveal>
    </section>
  );
}

