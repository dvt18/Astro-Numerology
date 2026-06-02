import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#04040b',
        padding: '60px 24px 30px',
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
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

        {/* Message */}
        <p style={{ color: 'rgb(var(--text-muted))', maxWidth: '500px', fontSize: '0.9rem', lineHeight: '1.6' }}>
          Aligning personal and professional vibrations with the mathematically absolute harmony of the cosmos.
        </p>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              ),
              href: 'https://instagram.com'
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              ),
              href: 'https://twitter.com'
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              ),
              href: 'https://youtube.com'
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              ),
              href: 'mailto:dushyanttupkar18@gmail.com'
            },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgb(212, 175, 55)';
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{
          width: '100%',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.35)'
        }}>
          <p>© {new Date().getFullYear()} Aria Sterling Sacred Numerology. All Rights Reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Built with <Heart size={12} style={{ color: '#ec4899', fill: '#ec4899' }} /> in cosmic alignment.
          </p>
        </div>
      </div>
    </footer>
  );
}
