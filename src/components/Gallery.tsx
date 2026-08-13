import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = [
    {
      id: 0,
      title: 'Heritage Courtyard',
      description: 'Intimate portrait near the wooden mirror frame with hanging floral bird decorations.',
      src: '/images/couple_1.jpg',
    },
    {
      id: 1,
      title: 'Temple Gopuram Steps',
      description: 'Romantic seated portrait on the temple steps with the majestic gopuram behind.',
      src: '/images/couple_2.jpg',
    },
    {
      id: 2,
      title: 'Playful Temple Steps',
      description: 'A candid, playful teasing moment on the ancient stone steps of the temple.',
      src: '/images/couple_3.jpg',
    },
    {
      id: 3,
      title: 'Rocking Chair Candid',
      description: 'Candid courtyard shot on the traditional wooden rocking chair with warm mustard walls.',
      src: '/images/couple_4.jpg',
    },
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section className="gallery-section" id="gallery">
      <ScrollReveal>
        <h2 className="section-title">Our Moments Together</h2>
        <p className="section-subtitle">
          A glimpse into our beautiful journey of love, laughter, and heritage.
        </p>
      </ScrollReveal>

      <div className="gallery-grid">
        {images.map((img) => (
          <ScrollReveal key={img.id} delay={(img.id % 2) + 1}>
            <div
              className="gallery-item"
              onClick={() => setActiveIndex(img.id)}
              style={{
                cursor: 'pointer',
                borderRadius: '12px',
                border: '1.5px solid var(--border-gold)',
                boxShadow: 'var(--shadow-card)',
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '4/3',
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="gallery-img-hover"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(26,3,6,0.85) 0%, rgba(26,3,6,0.2) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '16px',
                  color: 'white',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--gold-light)', marginBottom: '2px' }}>
                  {img.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)' }}>
                  Click to Expand
                </p>
              </div>
              <div className="gallery-item-overlay"><span>View Image</span></div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" onClick={() => setActiveIndex(null)}>
          <div className="lightbox-close" onClick={() => setActiveIndex(null)}><X size={20} /></div>
          <button className="lightbox-nav-btn left" onClick={handlePrev} aria-label="Previous"><ChevronLeft size={24} /></button>
          <div
            className="lightbox-card"
            style={{ width: '90vw', maxWidth: '650px', borderRadius: '16px', border: '2px solid var(--gold)', overflow: 'hidden', background: '#1A0306', boxShadow: '0 24px 48px rgba(0,0,0,0.8)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ aspectRatio: '4/3', width: '100%' }}>
              <img src={images[activeIndex].src} alt={images[activeIndex].title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ padding: '20px 24px', borderTop: '1px solid var(--border-gold)', background: '#1A0306', color: 'white', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--gold-light)', marginBottom: '8px' }}>{images[activeIndex].title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.8)', maxWidth: '480px', margin: '0 auto' }}>{images[activeIndex].description}</p>
            </div>
          </div>
          <button className="lightbox-nav-btn right" onClick={handleNext} aria-label="Next"><ChevronRight size={24} /></button>
        </div>
      )}
    </section>
  );
}
