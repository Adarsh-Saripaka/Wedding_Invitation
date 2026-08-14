import ScrollReveal from './ScrollReveal';

export default function PersonalNote() {
  return (
    <section className="personal-note-section">
      <ScrollReveal>
        <div className="personal-note-card">
          <div className="note-card-corner top-left">❧</div>
          <div className="note-card-corner top-right">❧</div>
          <div className="note-card-corner bottom-left">❧</div>
          <div className="note-card-corner bottom-right">❧</div>
          <div className="note-watermark-bg" />
          
          <div className="note-card-header">
            <span className="note-ornament">✧ ❦ ✧</span>
          </div>
          
          <p className="personal-note-text">
            "In spite of sharing the Wedding Card, this one is a bit special and
            something only for my special ones."
          </p>

          <div className="note-card-footer">
            <span className="note-signature-flourish">❦</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

