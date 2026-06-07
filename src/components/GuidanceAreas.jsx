import React, { useState } from 'react';
import { Coins, Heart, Briefcase, Activity, PenTool, ArrowRight, X, ShieldCheck } from 'lucide-react';

export default function GuidanceAreas() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'wealth',
      icon: <Coins size={24} style={{ color: 'rgb(212, 175, 55)' }} />,
      title: 'Wealth & Financial Alignment',
      shortDesc: 'Re-align your wealth frequencies, banking configurations, and property address codes to clear blocked financial flows.',
      longDesc: 'Your relationship with money is deeply influenced by your core vibrational frequencies. Through precise calculations, we study your birth codes, bank account sequences, and house numbers to identify energetic friction points that may block abundance. You will receive customized suggestions to align your outer structures with your natural Wealth numbers.',
      price: '$149',
      duration: '45 Mins Session'
    },
    {
      id: 'love',
      icon: <Heart size={24} style={{ color: '#ec4899' }} />,
      title: 'Love & Relationship Synergy',
      shortDesc: 'Map compatibility scores, discover karmic bonds, and optimize wedding dates for friction-free emotional connections.',
      longDesc: 'Relationships are a dance of two distinct numeric profiles. By layering your blueprint over your partner\'s, we create an extensive Compatibility Matrix. This reveals key strengths, communication zones, and karmic lessons. We also calculate auspicious dates for engagements, marriages, or moving in together to ensure maximum harmony.',
      price: '$189',
      duration: '60 Mins Session'
    },
    {
      id: 'career',
      icon: <Briefcase size={24} style={{ color: '#3b82f6' }} />,
      title: 'Career Direction & Purpose',
      shortDesc: 'Unlock your Destiny (Expression) potentials, identify perfect business sectors, and map annual timing peaks.',
      longDesc: 'Struggling with professional direction? Your Destiny and Soul Urge numbers indicate your natural vocational callings. We map your current age against your personal year cycles (Personal Year 1 to 9) to guide timing on job transitions, launching products, or starting new educational courses with precision.',
      price: '$129',
      duration: '45 Mins Session'
    },
    {
      id: 'wellness',
      icon: <Activity size={24} style={{ color: '#10b981' }} />,
      title: 'Vibrational Wellness Mapping',
      shortDesc: 'Coordinate your physical and emotional cycles using personal day numbers to optimize recovery and peace.',
      longDesc: 'Numbers represent specific organic rhythms. By looking at the core grid of your birthdate, we identify energy peaks and balance points. This helps establish personal routines, meditation schedules, and creative breaks that coincide with your high-vibration periods, preventing burnout and promoting harmony.',
      price: '$119',
      duration: '30 Mins Session'
    },
    {
      id: 'signature',
      icon: <PenTool size={24} style={{ color: '#a855f7' }} />,
      title: 'Business & Signature Tuning',
      shortDesc: 'Optimize your professional branding titles, corporate registration values, and signatures for frictionless growth.',
      longDesc: 'A business name or personal signature carries a public vibration that attracts or repels opportunities. We analyze your brand names, website URLs, and active signatures under the Pythagorean grid. We then recommend small alterations (like adding a letter or adjusting the stroke direction) to unlock powerful expansion.',
      price: '$199',
      duration: '60 Mins Session'
    }
  ];

  return (
    <section
      id="guidance"
      className="section-container"
      style={{
        backgroundColor: 'rgba(3, 3, 10, 0.4)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: 'rgb(var(--accent))', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Professional Consultancy</span>
          <h2 className="section-title">
            Sacred <span className="gold-gradient-text">Guidance Dimensions</span>
          </h2>
          <p style={{ color: 'rgb(var(--text-muted))', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Professional numeric alignments designed to align your career, financial choices, relationships, and company presence with universal laws.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="guidance-card"
              onClick={() => setSelectedService(service)}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                {service.icon}
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-mystic)',
                    fontSize: '1.1rem',
                    marginBottom: '8px',
                    color: '#fff',
                    letterSpacing: '0.04em'
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'rgb(var(--text-muted))',
                    lineHeight: '1.5',
                  }}
                >
                  {service.shortDesc}
                </p>
              </div>

              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'rgb(var(--accent))',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Learn More
                <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAIL MODAL */}
      {selectedService && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="glass-card modal-card"
            style={{
              maxWidth: '600px',
              boxShadow: '0 0 40px rgba(138,43,226,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
              }}
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="modal-header-flex" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '24px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
              }}>
                {selectedService.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-mystic)', fontSize: '1.4rem', color: '#fff' }}>
                  {selectedService.title}
                </h3>
                <span style={{ color: 'rgb(var(--accent))', fontWeight: 600, fontSize: '0.85rem' }}>
                  {selectedService.duration}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgb(var(--text-muted))', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>Consultation Overview</h4>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>
                  {selectedService.longDesc}
                </p>
              </div>

              {/* Price Banner */}
              <div className="price-banner-flex">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <ShieldCheck style={{ color: 'rgb(var(--accent))', flexShrink: 0 }} size={20} />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'rgb(var(--text-muted))', fontWeight: 500 }}>Session Investment</span>
                    <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>{selectedService.price}</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="btn-gold"
                  style={{ padding: '8px 20px', fontSize: '0.8rem', textDecoration: 'none' }}
                >
                  Schedule Session
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
