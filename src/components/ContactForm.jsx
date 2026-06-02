import React, { useState, useEffect } from 'react';
import { Send, Sparkles, Info, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export default function ContactForm({ prefilledData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [queryType, setQueryType] = useState('wealth');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Prefill when calculator is run
  useEffect(() => {
    if (prefilledData) {
      setName(prefilledData.name || '');
      setBirthDate(prefilledData.birthDate || '');
    }
  }, [prefilledData]);

  const YOUR_EMAIL = 'dushyanttupkar18@gmail.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !mobile) {
      setError('Name, Email, and Mobile number are required fields.');
      return;
    }
    setError('');
    setLoading(true);

    let blueprintStr = 'Not calculated yet';
    if (prefilledData) {
      blueprintStr = `Life Path: ${prefilledData.lifePath}, Destiny: ${prefilledData.destiny}, Soul Urge: ${prefilledData.soulUrge}, Personality: ${prefilledData.personality}`;
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "Client Name": name,
          "Email Address": email,
          "WhatsApp/Mobile": mobile,
          "Date of Birth": birthDate || "Not Provided",
          "Audit Dimension": queryType.toUpperCase(),
          "Calculated Blueprint": blueprintStr,
          "Message/Enquiry": message || "No custom message",
          "_subject": `🌌 New Astro-Numerology Audit Booking from ${name}`
        })
      });

      const result = await response.json();
      if (result.success === 'true') {
        setSuccess(true);
      } else {
        setError('Failed to transmit. Please verify your connection and try again.');
      }
    } catch (err) {
      setError('A network error occurred. Please try again shortly.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMobile('');
    setBirthDate('');
    setQueryType('wealth');
    setMessage('');
    setSuccess(false);
    setError('');
  };

  return (
    <section
      id="contact"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 10,
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <div className="glass-card" style={{ padding: '48px', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)' }}>
        
        {/* SUCCESS STATE DISPLAY */}
        {success ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }} className="fade-in">
            <div style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '3px solid rgb(212, 175, 55)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
              }}>
                <CheckCircle2 size={40} style={{ color: 'rgb(212, 175, 55)' }} />
              </div>
            </div>

            <span style={{ color: 'rgb(var(--accent))', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              Transmission Successful
            </span>
            <h2 className="mystic-title" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '20px' }}>
              Blueprint <span className="gold-gradient-text">Received</span>
            </h2>
            
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '24px',
              maxWidth: '650px',
              margin: '0 auto 32px',
              lineHeight: '1.7',
              fontSize: '0.95rem',
              color: 'rgb(var(--text-muted))'
            }}>
              <p style={{ marginBottom: '12px', color: '#fff', fontWeight: 500 }}>
                Greetings, {name}. Your calculations and situation details have been securely logged.
              </p>
              Your numeric blueprint has been successfully shared. Aria will study your unique birth chart numbers and contact you at <strong style={{ color: 'rgb(var(--accent))' }}>{email}</strong> or <strong style={{ color: 'rgb(var(--accent))' }}>{mobile}</strong> within 24 hours to schedule your live reading session.
            </div>

            <button onClick={handleReset} className="btn-secondary" style={{ display: 'inline-flex', gap: '10px' }}>
              <RefreshCw size={16} />
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          /* ACTIVE FORM DISPLAY */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span style={{ color: 'rgb(var(--accent))', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Let's Work Together</span>
              <h2 className="mystic-title" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginTop: '8px', marginBottom: '16px' }}>
                Book a <span className="gold-gradient-text">Personal Session</span>
              </h2>
              <p style={{ color: 'rgb(var(--text-muted))', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Submit your birth details below, and Aria will reach out directly to schedule your personal live alignment session.
              </p>
            </div>

            {/* Calculator Prefilled Banner indicator */}
            {prefilledData && (
              <div style={{
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1.5px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px',
                padding: '16px 20px',
                marginBottom: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 4px 15px rgba(212,175,55,0.05)'
              }} className="fade-in">
                <Info style={{ color: 'rgb(var(--accent))', flexShrink: 0 }} size={20} />
                <div style={{ fontSize: '0.85rem', color: 'rgb(var(--text-light))', lineHeight: '1.5' }}>
                  <strong style={{ color: 'rgb(var(--accent))' }}>Destiny Blueprint Preloaded!</strong> Your calculations (Life Path <strong style={{ color: 'rgb(var(--accent))' }}>{prefilledData.lifePath}</strong>, Destiny <strong style={{ color: 'rgb(var(--accent))' }}>{prefilledData.destiny}</strong>, Soul Urge <strong style={{ color: 'rgb(var(--accent))' }}>{prefilledData.soulUrge}</strong>, Personality <strong style={{ color: 'rgb(var(--accent))' }}>{prefilledData.personality}</strong>) are bound to this submission.
                </div>
              </div>
            )}

            {/* Error Message Box */}
            {error && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '12px',
                padding: '14px 18px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#fca5a5',
                fontSize: '0.85rem'
              }}>
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }} className="form-grid-2">
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgb(var(--text-muted))', letterSpacing: '0.05em' }}>CLIENT FULL NAME *</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mystic-input"
                    disabled={loading}
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgb(var(--text-muted))', letterSpacing: '0.05em' }}>EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mystic-input"
                    disabled={loading}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }} className="form-grid-2">
                {/* Mobile */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgb(var(--text-muted))', letterSpacing: '0.05em' }}>MOBILE / WHATSAPP NUMBER *</label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 9145404603"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="mystic-input"
                    disabled={loading}
                  />
                </div>

                {/* Birth date */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgb(var(--text-muted))', letterSpacing: '0.05em' }}>DATE OF BIRTH</label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="mystic-input"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Audit Dimension */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgb(var(--text-muted))', letterSpacing: '0.05em' }}>GUIDANCE AREA</label>
                <select
                  value={queryType}
                  onChange={(e) => setQueryType(e.target.value)}
                  className="mystic-input mystic-select"
                  disabled={loading}
                >
                  <option value="wealth">Wealth & Financial Alignment</option>
                  <option value="love">Love & Relationship Synergy</option>
                  <option value="career">Career Direction & Purpose</option>
                  <option value="wellness">Vibrational Wellness Mapping</option>
                  <option value="signature">Business & Signature Tuning</option>
                  <option value="general">General Astro-Numerology Audit</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgb(var(--text-muted))', letterSpacing: '0.05em' }}>SPECIFIC ENQUIRY OR SITUATION DESCRIPTION</label>
                <textarea
                  rows={4}
                  placeholder="Describe your current life situation or what specific questions you want Aria to answer using your core blueprint..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mystic-input"
                  style={{ resize: 'vertical' }}
                  disabled={loading}
                />
              </div>

              {/* Submit Action Button */}
              <div style={{ marginTop: '16px' }}>
                <button
                  type="submit"
                  className="btn-gold"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px'
                  }}
                >
                  <Send size={18} style={{ stroke: '#060611', fill: loading ? 'none' : '#060611' }} />
                  {loading ? 'Scheduling Session...' : 'Book My Session Now'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .form-grid-2 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
