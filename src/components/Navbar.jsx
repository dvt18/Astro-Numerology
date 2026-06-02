import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Destiny Guidance', href: '#guidance' },
    { name: 'About Aria', href: '#about' },
    { name: 'Get Consultation', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 100 + '%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(6, 6, 17, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: '16px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            fontFamily: 'var(--font-mystic)',
            fontWeight: 700,
            fontSize: '1.4rem',
            letterSpacing: '0.1em',
          }}
          className="gold-gradient-text"
        >
          <Sparkles size={24} style={{ color: 'rgb(212, 175, 55)' }} />
          ARIA STERLING
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <div
            style={{
              display: 'none',
              gap: '32px',
            }}
            className="desktop-links"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: 'rgb(var(--text-light))',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  letterSpacing: '0.05em',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'rgb(212, 175, 55)')}
                onMouseLeave={(e) => (e.target.style.color = 'rgb(var(--text-light))')}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#calculator"
            className="btn-primary"
            style={{
              padding: '8px 20px',
              fontSize: '0.85rem',
              borderRadius: '20px',
              textDecoration: 'none',
              display: 'none',
            }}
            className="desktop-cta"
          >
            Calculate Profile
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'block',
            }}
            className="mobile-toggle-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links Dropdown */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'rgba(6, 6, 17, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            backdropFilter: 'blur(20px)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                color: 'rgb(var(--text-light))',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                paddingBottom: '8px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#calculator"
            onClick={() => setIsOpen(false)}
            className="btn-gold"
            style={{
              textAlign: 'center',
              textDecoration: 'none',
              marginTop: '10px',
              padding: '12px',
            }}
          >
            Start Free Calculation
          </a>
        </div>
      )}

      {/* Style overrides for media queries inside a style block because we are in vanilla React without Tailwind */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-links {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
