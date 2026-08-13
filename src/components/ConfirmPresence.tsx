import ScrollReveal from './ScrollReveal';

export default function ConfirmPresence() {
  return (
    <section className="confirm-section">
      <ScrollReveal>
        <h2 className="confirm-heading">Confirming Your Presence</h2>
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <p className="confirm-text">
          at my Wedding and in addition with that, I am expecting you to attend
          the other below events, at which your aura can add some vibe and make
          the situations even more Blissful.
        </p>
      </ScrollReveal>
    </section>
  );
}
