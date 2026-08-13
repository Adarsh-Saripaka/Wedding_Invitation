import FloralCorner from './FloralCorner';
import ScrollReveal from './ScrollReveal';

export default function ClosingNote() {
  return (
    <section className="closing-section">
      {/* Bottom corners decoration */}
      <FloralCorner className="bottom-left" />
      <FloralCorner className="bottom-right" />

      <ScrollReveal>
        <h2 className="closing-heading">♡ your presence around me ♡</h2>
      </ScrollReveal>

      <ScrollReveal delay={1}>
        <p className="closing-text">
          Along with the events, it is much required that you complete 24th August from morning
          till the last of my special day to fill my heart with satisfaction and joy.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={2}>
        <div className="closing-signoff">
          <p className="regards">Regards,</p>
          <h3 className="names">Ravi Teja & Sravya</h3>
          <span className="flourish" />
        </div>
      </ScrollReveal>
    </section>
  );
}
