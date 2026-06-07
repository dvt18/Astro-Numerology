import React, { useState } from 'react';
import { calculateLifePath, calculateNameNumbers } from '../utils/numerology';
import { numberProfiles } from '../data/readings';
import { Sparkles, Calendar, User, ArrowRight, X, Compass, HelpCircle } from 'lucide-react';

export default function Calculator({ onResultsCalculated }) {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [results, setResults] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // { type, number, profile }

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!name || !birthDate) return;

    const lp = calculateLifePath(birthDate);
    const { destiny, soulUrge, personality } = calculateNameNumbers(name);

    const calculatedResults = {
      lifePath: lp,
      destiny,
      soulUrge,
      personality,
      name,
      birthDate
    };

    setResults(calculatedResults);
    
    // Pass the calculated numbers up to App so they can prefill the ContactForm
    if (onResultsCalculated) {
      onResultsCalculated(calculatedResults);
    }

    // Scroll smoothly to results
    setTimeout(() => {
      document.getElementById('results-anchor')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const openModal = (type, num) => {
    const profile = numberProfiles[num];
    if (profile) {
      setActiveModal({ type, number: num, profile });
    }
  };

  const getCategoryLabel = (type) => {
    switch (type) {
      case 'lifePath': return 'Life Path Number';
      case 'destiny': return 'Destiny (Expression) Number';
      case 'soulUrge': return 'Soul Urge (Heart\'s Desire)';
      case 'personality': return 'Personality Number';
      default: return 'Numerology Number';
    }
  };

  const getCategoryDescription = (type, profile) => {
    switch (type) {
      case 'lifePath': return profile.lifePath;
      case 'destiny': return profile.destiny;
      case 'soulUrge': return profile.soulUrge;
      case 'personality': return profile.personality;
      default: return '';
    }
  };

  return (
    <section
      id="calculator"
      className="section-container"
    >
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="section-title">
          Discover Your <span className="gold-gradient-text">Core Vibration</span>
        </h2>
        <p style={{ color: 'rgb(var(--text-muted))', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Enter your full birth name and birth date to calculate the four core numbers that define your earthly journey, celestial talents, and inner cosmic self.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'start' }} className="calc-layout">
        {/* Form panel */}
        <div className="glass-card responsive-padding-36" style={{ maxWidth: '450px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px' }}>
            <Compass className="floating" style={{ color: 'rgb(var(--accent))' }} size={24} />
            <h3 style={{ fontFamily: 'var(--font-mystic)', fontSize: '1.2rem', letterSpacing: '0.05em' }}>Calculation Terminal</h3>
          </div>

          <form onSubmit={handleCalculate} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Full Name Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', color: 'rgb(var(--text-muted))', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={14} style={{ color: 'rgb(var(--accent))' }} />
                FULL BIRTH NAME
              </label>
              <input
                type="text"
                placeholder="First Middle Last (e.g. Johnathan Doe)"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mystic-input"
              />
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                *Use full name exactly as spelled on your birth certificate.
              </span>
            </div>

            {/* Birth Date Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', color: 'rgb(var(--text-muted))', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} style={{ color: 'rgb(var(--accent))' }} />
                BIRTH DATE
              </label>
              <input
                type="date"
                required
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="mystic-input"
              />
            </div>

            {/* Calculate Button */}
            <button type="submit" className="btn-gold" style={{ marginTop: '12px', width: '100%' }}>
              Reveal My Destiny Codes
              <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Results display */}
        {results && (
          <div id="results-anchor" className="fade-in" style={{ width: '100%', marginTop: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ color: 'rgb(var(--accent))', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Your Cosmic Alignment</span>
              <h3 className="mystic-title" style={{ fontSize: '1.4rem', marginTop: '6px', letterSpacing: '0.08em' }}>The Core Four Blueprint</h3>
            </div>

            <div className="results-grid">
              {/* LIFE PATH CARD */}
              <div className="results-card gold-border-hover">
                <div className="card-badge" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(212,175,55,0.1)', color: 'rgb(var(--accent))', padding: '3px 8px', borderRadius: '12px', fontSize: '0.65rem', fontWeight: 600 }}>BIRTH DATE</div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(138,43,226,0.2) 0%, rgba(6,6,17,0.8) 100%)',
                  border: '2px solid rgb(212,175,55)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  color: 'rgb(var(--text-light))',
                  marginBottom: '14px',
                  boxShadow: '0 0 12px rgba(212,175,55,0.3)'
                }}>
                  {results.lifePath}
                </div>
                <h4 style={{ fontFamily: 'var(--font-mystic)', fontSize: '1rem', marginBottom: '4px' }}>Life Path</h4>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  {numberProfiles[results.lifePath]?.title}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'rgb(var(--text-muted))', lineHeight: '1.45', flexGrow: 1, marginBottom: '16px' }}>
                  Derived from your birth date. Represents your life's primary journey, core lessons, and ultimate destination.
                </p>
                <button onClick={() => openModal('lifePath', results.lifePath)} className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.75rem', width: '100%', borderRadius: '20px' }}>
                  Unlock Full Readings
                </button>
              </div>

              {/* DESTINY CARD */}
              <div className="results-card gold-border-hover">
                <div className="card-badge" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(138,43,226,0.15)', color: '#d8b4fe', padding: '3px 8px', borderRadius: '12px', fontSize: '0.65rem', fontWeight: 600 }}>ALL LETTERS</div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(138,43,226,0.2) 0%, rgba(6,6,17,0.8) 100%)',
                  border: '2px solid rgba(138,43,226,0.7)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  color: 'rgb(var(--text-light))',
                  marginBottom: '14px',
                  boxShadow: '0 0 12px rgba(138, 43, 226, 0.3)'
                }}>
                  {results.destiny}
                </div>
                <h4 style={{ fontFamily: 'var(--font-mystic)', fontSize: '1rem', marginBottom: '4px' }}>Destiny</h4>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  {numberProfiles[results.destiny]?.title}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'rgb(var(--text-muted))', lineHeight: '1.45', flexGrow: 1, marginBottom: '16px' }}>
                  Derived from all letters in your name. Represents your vocational talents, innate capabilities, and natural expression.
                </p>
                <button onClick={() => openModal('destiny', results.destiny)} className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.75rem', width: '100%', borderRadius: '20px' }}>
                  Unlock Full Readings
                </button>
              </div>

              {/* SOUL URGE CARD */}
              <div className="results-card gold-border-hover">
                <div className="card-badge" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(138,43,226,0.15)', color: '#d8b4fe', padding: '3px 8px', borderRadius: '12px', fontSize: '0.65rem', fontWeight: 600 }}>VOWELS ONLY</div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(138,43,226,0.2) 0%, rgba(6,6,17,0.8) 100%)',
                  border: '2px solid rgba(138,43,226,0.7)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  color: 'rgb(var(--text-light))',
                  marginBottom: '14px',
                  boxShadow: '0 0 12px rgba(138, 43, 226, 0.3)'
                }}>
                  {results.soulUrge}
                </div>
                <h4 style={{ fontFamily: 'var(--font-mystic)', fontSize: '1rem', marginBottom: '4px' }}>Soul Urge</h4>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  {numberProfiles[results.soulUrge]?.title}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'rgb(var(--text-muted))', lineHeight: '1.45', flexGrow: 1, marginBottom: '16px' }}>
                  Derived from your name's vowels. Unveils your hidden desires, innermost drivers, and what truly fulfills your soul.
                </p>
                <button onClick={() => openModal('soulUrge', results.soulUrge)} className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.75rem', width: '100%', borderRadius: '20px' }}>
                  Unlock Full Readings
                </button>
              </div>

              {/* PERSONALITY CARD */}
              <div className="results-card gold-border-hover">
                <div className="card-badge" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(138,43,226,0.15)', color: '#d8b4fe', padding: '3px 8px', borderRadius: '12px', fontSize: '0.65rem', fontWeight: 600 }}>CONSONANTS ONLY</div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(138,43,226,0.2) 0%, rgba(6,6,17,0.8) 100%)',
                  border: '2px solid rgba(138,43,226,0.7)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  color: 'rgb(var(--text-light))',
                  marginBottom: '14px',
                  boxShadow: '0 0 12px rgba(138, 43, 226, 0.3)'
                }}>
                  {results.personality}
                </div>
                <h4 style={{ fontFamily: 'var(--font-mystic)', fontSize: '1rem', marginBottom: '4px' }}>Personality</h4>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  {numberProfiles[results.personality]?.title}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'rgb(var(--text-muted))', lineHeight: '1.45', flexGrow: 1, marginBottom: '16px' }}>
                  Derived from your name's consonants. Governs your social mask, first impressions, and how the external world perceives you.
                </p>
                <button onClick={() => openModal('personality', results.personality)} className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.75rem', width: '100%', borderRadius: '20px' }}>
                  Unlock Full Readings
                </button>
              </div>
            </div>

            {/* Align Consultation CTA */}
            <div style={{ marginTop: '48px', textAlign: 'center' }}>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '16px' }}>
                Your codes are calculated! Would you like to map these onto your life's current challenges?
              </p>
              <a href="#contact" className="btn-gold" style={{ display: 'inline-flex' }}>
                Integrate Details & Book Reading
                <Sparkles size={16} />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* READING MODAL */}
      {activeModal && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="glass-card modal-card"
            style={{
              boxShadow: '0 0 40px rgba(138,43,226,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#fff')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.5)')}
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '24px' }}>
              <span style={{ color: 'rgb(var(--accent))', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {getCategoryLabel(activeModal.type)}
              </span>
              <div className="modal-header-flex">
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: '2.5px solid rgb(212,175,55)',
                  background: 'rgba(212,175,55,0.08)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  color: '#fff',
                  boxShadow: '0 0 15px rgba(212,175,55,0.2)',
                  flexShrink: 0
                }}>
                  {activeModal.number}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-mystic)', fontSize: '1.6rem', color: '#fff' }}>
                    {activeModal.profile.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                    Planetary Ruler: <strong style={{ color: 'rgb(var(--accent))' }}>{activeModal.profile.planet}</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Keywords */}
              <div>
                <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', color: 'rgb(var(--text-muted))', textTransform: 'uppercase', marginBottom: '6px' }}>Vibrational Keywords</h4>
                <p style={{ fontSize: '0.95rem', color: 'rgb(212, 175, 55)', fontWeight: 500 }}>
                  {activeModal.profile.keywords}
                </p>
              </div>

              {/* Core Description */}
              <div>
                <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', color: 'rgb(var(--text-muted))', textTransform: 'uppercase', marginBottom: '8px' }}>Detailed Revelation</h4>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                  {getCategoryDescription(activeModal.type, activeModal.profile)}
                </p>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="modal-footer-flex">
              <button onClick={() => setActiveModal(null)} className="btn-secondary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                Close Scroll
              </button>
              <a
                href="#contact"
                onClick={() => setActiveModal(null)}
                className="btn-gold"
                style={{ padding: '8px 20px', fontSize: '0.85rem', textDecoration: 'none' }}
              >
                Apply to Consultation
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .calc-layout {
            grid-template-columns: 0.8fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
