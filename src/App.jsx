import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import GuidanceAreas from './components/GuidanceAreas';
import Bio from './components/Bio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [calcResults, setCalcResults] = useState(null);

  const handleCalculatorResults = (results) => {
    setCalcResults(results);
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Cosmic overlays defined in index.css */}
      <div className="stars-overlay" />
      <div className="nebula-overlay-1" />
      <div className="nebula-overlay-2" />

      {/* Floating Transparent Navbar */}
      <Navbar />

      {/* Hero Landing */}
      <Hero />

      {/* Universal Cosmic Language Quote Divider */}
      <div className="quote-container fade-in">
        <div style={{
          width: '60px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgb(212, 175, 55), transparent)',
          margin: '0 auto 24px'
        }} />
        <p style={{
          fontFamily: 'var(--font-mystic)',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.85rem)',
          lineHeight: '1.65',
          color: 'rgb(var(--text-light))',
          fontWeight: 400,
          letterSpacing: '0.04em',
          fontStyle: 'italic',
          textShadow: '0 0 20px rgba(212, 175, 55, 0.25)'
        }} className="gold-gradient-text">
          "Mathematics is the universal language of the cosmos, and numbers are the vibrational keys that unlock the blueprints of the soul."
        </p>
        <span style={{
          display: 'block',
          marginTop: '16px',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'rgba(255, 255, 255, 0.4)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase'
        }}>
          — Pythagoras of Samos
        </span>
        <div style={{
          width: '60px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgb(212, 175, 55), transparent)',
          margin: '24px auto 0'
        }} />
      </div>

      {/* Pythagorean Calculations Console */}
      <Calculator onResultsCalculated={handleCalculatorResults} />

      {/* Service & Audit Offerings */}
      <GuidanceAreas />

      {/* Credentials and Bio */}
      <Bio />

      {/* Free Direct Routing Submission Form */}
      <ContactForm prefilledData={calcResults} />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
