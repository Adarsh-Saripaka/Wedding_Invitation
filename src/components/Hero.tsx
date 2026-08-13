import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FloralCorner from './FloralCorner';
import { useCountdown } from '../hooks/useCountdown';
import GaneshaIcon from './GaneshaIcon';

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
    <section className="hero" id="hero">
      {/* Floral corners */}
      <FloralCorner className="top-left" />
      <FloralCorner className="top-right" />

      <div className="hero-content">
        {loaded && (
          <>
            {/* Ganesha icon */}
            <motion.div
              className="hero-ganesha"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <GaneshaIcon size={52} />
            </motion.div>

            {/* Eyebrow text */}
            <motion.p
              className="hero-eyebrow"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              WITH THE DIVINE BLESSINGS OF
            </motion.p>

            {/* Script line */}
            <motion.p
              className="hero-divine-text"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              God & Elderly Ones
            </motion.p>

            {/* Gold divider */}
            <motion.div
              className="gold-divider"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="line" />
              <span className="heart">♥</span>
              <span className="line" />
            </motion.div>

            {/* Groom name */}
            <motion.h1
              className="hero-groom-name"
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              I, Ravi Teja,
            </motion.h1>

            {/* Getting married */}
            <motion.p
              className="hero-getting-married"
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              AM GETTING MARRIED TO
            </motion.p>

            {/* Bride name */}
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h2 className="hero-bride-name">
                Sravya
                <span className="hero-bride-heart">♡</span>
              </h2>
            </motion.div>

            {/* Countdown */}
            <motion.div
              className="countdown-container"
              custom={7}
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
