import { useState, type FormEvent } from 'react';
import { Send, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function GuestWishes() {
  const [wishes, setWishes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!wishes.trim()) return;

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section className="rsvp-section" id="wishes" style={{ paddingBottom: '40px' }}>
      <ScrollReveal>
        <h2 className="section-title">Wishes & Blessings</h2>
        <p className="section-subtitle">
          Leave your warm message and wishes for our new beginnings.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={1}>
        <div className="rsvp-form">
          {isSubmitted ? (
            <div className="rsvp-success">
              <div className="checkmark" style={{ color: 'var(--sage)' }}>
                <Check size={44} strokeWidth={3} style={{ margin: '0 auto' }} />
              </div>
              <h3>Thank You!</h3>
              <p>Your beautiful wishes have been sent to the couple.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="wishes-box">Your Message</label>
                <textarea
                  id="wishes-box"
                  value={wishes}
                  onChange={(e) => setWishes(e.target.value)}
                  placeholder="Write your wishes for Ravi Teja & Sravya here..."
                  rows={4}
                  required
                />
              </div>

              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={14} />
                </span>
              </button>
            </form>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
