import { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  const goNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : prev === images.length - 1 ? 0 : prev + 1
    );
  }, [images.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
    );
  }, [images.length]);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex, goNext, goPrev, closeLightbox]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
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
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveIndex(img.id)}
              aria-label={`View ${img.title}`}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="gallery-item-img"
              />
              <div className="gallery-item-info">
                <h3 className="gallery-item-title">{img.title}</h3>
                <span className="gallery-item-cta">Tap to view</span>
              </div>
              <div className="gallery-item-hover-overlay">
                <span className="gallery-view-label">View Image</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {activeIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            className="lightbox-close-btn"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Prev arrow */}
          <button
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image card */}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-wrap">
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].title}
                className="lightbox-image"
              />
            </div>
            <div className="lightbox-caption">
              <h3 className="lightbox-title">{images[activeIndex].title}</h3>
              <p className="lightbox-desc">{images[activeIndex].description}</p>
              <span className="lightbox-counter">
                {activeIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Next arrow */}
          <button
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
