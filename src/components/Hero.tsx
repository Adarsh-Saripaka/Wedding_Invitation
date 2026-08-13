import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';

const WEDDING_DATE = new Date('2026-08-26T09:00:00+05:30');

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  const fadeUp: any = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
    }),
  };

  return (
    <section className="hero hero-with-bg" id="hero">
      {/* Background Image */}
      <div className="hero-bg-image">
        <img src="/images/invitation_hero.jpg" alt="Wedding Invitation - Ravi Teja & Sravya" />
      </div>
      <div className="hero-bg-overlay" />

      <div className="hero-content">
        {loaded && (
          <>
            {/* Countdown */}
            <motion.div
              className="countdown-container"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {[
                { value: days, label: 'Days' },
                { value: hours, label: 'Hours' },
                { value: minutes, label: 'Minutes' },
                { value: seconds, label: 'Seconds' },
              ].map((item) => (
                <div className="countdown-item" key={item.label}>
                  <span className="countdown-number">{item.value}</span>
                  <span className="countdown-label">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Scroll to explore</span>
        <div className="chevron" />
      </motion.div>
    </section>
  );
}
