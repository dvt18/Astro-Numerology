import React from 'react';
import { Compass, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Hero Copy */}
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          className="hero-copy"
        >
          {/* Subtle glowing badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '30px',
              color: 'rgb(212, 175, 55)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
            className="glow-text-gold"
          >
            <Sparkles size={14} />
            Ancient Pythagorean Wisdom
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(1.7rem, 4.5vw, 3.2rem)',
              lineHeight: 1.15,
              fontWeight: 900,
              marginBottom: '20px',
              textAlign: 'center',
            }}
            className="mystic-title"
          >
            Unlock the <span className="gold-gradient-text">Divine Blueprint</span> <br />
            of Your <span className="violet-gradient-text">Destiny</span>
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'rgb(var(--text-muted))',
              maxWidth: '750px',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            Discover your true life path, align your career energy, and map your inner soul vibrations using the absolute mathematical principles of modern Numerology.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
            }}
          >
            <a href="#calculator" className="btn-gold">
              <Compass size={18} />
              Calculate My Numbers
            </a>
            <a href="#contact" className="btn-secondary">
              Book Deep Reading
            </a>
          </div>
        </div>

        {/* Hero Visual: Sacred Geometry Mandala */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
          }}
          className="hero-visual"
        >
          {/* Rotating Sacred Geometry */}
          <div className="hero-visual-wrapper">
            {/* Spinning Glow Ring 1 */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                border: '1px dashed rgba(138, 43, 226, 0.2)',
                borderRadius: '50%',
                animation: 'spin-clockwise 60s linear infinite',
              }}
            />

            {/* Spinning Glow Ring 2 */}
            <div
              style={{
                position: 'absolute',
                width: '85%',
                height: '85%',
                border: '1.5px solid rgba(212, 175, 55, 0.15)',
                borderRadius: '50%',
                animation: 'spin-counter 45s linear infinite',
              }}
            />

            {/* Inner Sacred Geometry SVG */}
            <svg
              viewBox="0 0 200 200"
              style={{
                width: '75%',
                height: '75%',
                opacity: 0.85,
                animation: 'spin-clockwise 120s linear infinite',
                filter: 'drop-shadow(0 0 15px rgba(138, 43, 226, 0.35))',
              }}
            >
              {/* Star of David / Overlapping Triangles */}
              <polygon
                points="100,20 170,140 30,140"
                fill="none"
                stroke="url(#goldGrad)"
                strokeWidth="1"
              />
              <polygon
                points="100,180 170,60 30,60"
                fill="none"
                stroke="url(#goldGrad)"
                strokeWidth="1"
              />
              
              {/* Concentric Circles */}
              <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(138, 43, 226, 0.3)" strokeWidth="0.75" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="0.75" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(138, 43, 226, 0.5)" strokeWidth="1" />
              
              {/* Decagon Nodes */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x = 100 + 70 * Math.cos(angle);
                const y = 100 + 70 * Math.sin(angle);
                return (
                  <g key={i}>
                    <line x1="100" y1="100" x2={x} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="0.7" />
                    <circle cx={x} cy={y} r="3" fill="rgb(212, 175, 55)" />
                  </g>
                );
              })}

              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="50%" stopColor="#fffdf0" />
                  <stop offset="100%" stopColor="#b8860b" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Center */}
            <div
              style={{
                position: 'absolute',
                width: '60px',
                height: '60px',
                background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(138,43,226,0) 70%)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="floating"
            >
              <Star size={18} style={{ color: 'rgb(212, 175, 55)', fill: 'rgb(212, 175, 55)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Animations and Mobile styles */}
      <style>{`
        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-counter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
            text-align: left !important;
          }
          .hero-copy {
            align-items: flex-start !important;
            text-align: left !important;
          }
          .hero-copy h1, .hero-copy p {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
