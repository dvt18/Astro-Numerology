import React from 'react';
import { Award, Compass, Heart, Users, Star } from 'lucide-react';

export default function Bio() {
  const credentials = [
    {
      icon: <Award size={20} style={{ color: 'rgb(212, 175, 55)' }} />,
      title: 'Certified Pythagorean Chart Specialist',
      desc: 'Formally trained in ancient Hebrew and Greek mathematical traditions.'
    },
    {
      icon: <Compass size={20} style={{ color: 'rgb(138, 43, 226)' }} />,
      title: 'Astro-Numerology Decan Specialist',
      desc: 'Pioneered custom integrations mapping numeric peaks with natal astrology charts.'
    },
    {
      icon: <Users size={20} style={{ color: '#3b82f6' }} />,
      title: 'Spiritual Advisor to Founders & Creators',
      desc: 'Consulting high-performing executives across global start-up hubs.'
    }
  ];

  return (
    <section
      id="about"
      className="section-container"
    >
      <div
        className="glass-card bio-grid responsive-padding-48"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(24px, 4vw, 48px)',
          alignItems: 'center',
          boxShadow: '0 15px 50px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Left Column: Premium Portrait */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Glowing Aura backdrop */}
          <div style={{
            position: 'absolute',
            width: '102%',
            height: '102%',
            background: 'linear-gradient(135deg, rgba(212,175,55,0.4) 0%, rgba(138,43,226,0.3) 100%)',
            borderRadius: '24px',
            filter: 'blur(10px)',
            opacity: 0.7,
            zIndex: 1
          }} />

          {/* Core Image Container */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '2px solid rgba(255,255,255,0.1)',
            zIndex: 2,
            aspectRatio: '3/4',
            width: '100%',
            maxWidth: '330px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}>
            <img
              src="/aria_sterling.png"
              alt="Aria Sterling"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
            {/* Dark glass text banner inside portrait */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              background: 'linear-gradient(to top, rgba(6,6,17,0.95) 0%, rgba(6,6,17,0.5) 80%, rgba(6,6,17,0) 100%)',
              padding: '20px',
              textAlign: 'center'
            }}>
              <span style={{ fontFamily: 'var(--font-mystic)', color: '#fff', fontSize: '1.15rem', letterSpacing: '0.08rem', display: 'block' }}>ARIA STERLING</span>
              <span style={{ fontSize: '0.75rem', color: 'rgb(212, 175, 55)', fontWeight: 600, letterSpacing: '0.05rem', textTransform: 'uppercase' }}>FOUNDER & COSMIC GUIDE</span>
            </div>
          </div>
        </div>

        {/* Right Column: Copy & Experience */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <span style={{ color: 'rgb(var(--accent))', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>The Practitioner</span>
            <h2 className="mystic-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginTop: '8px', marginBottom: '14px', lineHeight: '1.25' }}>
              The Guardian of <br />
              <span className="gold-gradient-text">Personal Frequencies</span>
            </h2>
            <p style={{ color: 'rgb(var(--text-muted))', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '12px' }}>
              Over the past 14 years, Aria has mapped out structural numerology readings for creative minds and executives. Combining the mathematics of Pythagorean reductions with classical astrology elements, she helps clarify energetic alignments, auspicious time windows, and vocational paths.
            </p>
            <p style={{ color: 'rgb(var(--text-muted))', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Instead of fortune-telling, Aria uses calculations to uncover personal patterns, mapping how numbers like address coordinates or legal name structures can trigger smooth, friction-free business expansion.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="metrics-grid">
            <div>
              <span className="metric-number" style={{ color: 'rgb(212, 175, 55)' }}>14+</span>
              <span style={{ fontSize: '0.75rem', color: 'rgb(var(--text-muted))', fontWeight: 500 }}>Years Experience</span>
            </div>
            <div>
              <span className="metric-number" style={{ color: 'rgb(var(--text-light))' }}>4,500+</span>
              <span style={{ fontSize: '0.75rem', color: 'rgb(var(--text-muted))', fontWeight: 500 }}>Clients Aligned</span>
            </div>
            <div>
              <span className="metric-number" style={{ color: '#10b981' }}>99%</span>
              <span style={{ fontSize: '0.75rem', color: 'rgb(var(--text-muted))', fontWeight: 500 }}>Success Rate</span>
            </div>
          </div>

          {/* Credentials Checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {credentials.map((cred, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '8px',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  {cred.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', marginBottom: '3px' }}>{cred.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgb(var(--text-muted))', lineHeight: '1.4' }}>{cred.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .bio-grid {
            grid-template-columns: 0.8fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
