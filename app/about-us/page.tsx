'use client';

import Link from 'next/link'

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, #F8F7F5 100%)',
        padding: '120px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'var(--accent)',
            }}>
              We Transform Ideas into Digital Excellence
            </h1>
            <p style={{
              fontSize: '1.375rem',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto 2.5rem'
            }}>
              Our team combines creativity, technology, and strategy to deliver meaningful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Digital Marketing Excellence */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: 'var(--accent)',
            }}>
              The Best Digital Marketing Agency in Tamil Nadu
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Bepix is a leading Digital Marketing Agency in Tamil Nadu, known for its innovative strategies, creative designs, and advanced digital solutions. Beyond digital marketing, our expertise extends to Website Development, Branding, and Advertising Services — all crafted to elevate your business in today's competitive market.
            </p>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              At Bepix, we believe that your brand deserves to shine. That's why we combine creativity, technology, and marketing expertise to deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Our Commitment */}
      <section style={{ padding: '100px 0', background: '#F8F7F5' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: 'var(--accent)',
            }}>
              Be at Ease — Let the Experts Handle It
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              We understand the importance of time and quality. Every project we take on is delivered punctually, professionally, and with precision.
              Our clients rely on us because we maintain consistency, uphold strong work ethics, and never compromise on quality.
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem', 
              marginTop: '3rem' 
            }}>
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: '#C6FB50',
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--accent)' }}>
                  Deliver on our promises — always on time.
                </h3>
              </div>
              
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: '#C6FB50',
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    <path d="M8 12l2 2 4-4"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--accent)' }}>
                  Maintain the highest quality standards across every project.
                </h3>
              </div>
              
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: '#C6FB50',
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--accent)' }}>
                  Offer flexible, expert-driven support to ensure client satisfaction.
                </h3>
              </div>
              
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(67, 233, 123, 0.3)'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--accent)' }}>
                  Solve problems efficiently and ensure they never repeat.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Strength in Numbers */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '4rem',
              color: 'var(--accent)',
            }}>
              Our Strength in Numbers
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <div style={{
                background: '#C6FB50',
                padding: '3rem 2rem',
                borderRadius: '20px',
                color: 'black',
                textAlign: 'center',
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.3)';
              }}>
                <div style={{ 
                  fontSize: '4rem', 
                  fontWeight: '800', 
                  marginBottom: '1rem',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                  60+
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                }}>
                  Professionals
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  opacity: '0.95'
                }}>
                  A passionate team of digital experts, designers, and strategists who love to learn and innovate.
                </p>
              </div>
              
              <div style={{
                background: '#C6FB50',
                padding: '3rem 2rem',
                borderRadius: '20px',
                color: 'black',
                textAlign: 'center',
                boxShadow: '0 12px 40px rgba(240, 147, 251, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(240, 147, 251, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(240, 147, 251, 0.3)';
              }}>
                <div style={{ 
                  fontSize: '4rem', 
                  fontWeight: '800', 
                  marginBottom: '1rem',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                  20+
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                }}>
                  Projects
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  opacity: '0.95'
                }}>
                  A growing portfolio of successfully delivered projects across diverse industries.
                </p>
              </div>
              
              <div style={{
                background: '#C6FB50',
                padding: '3rem 2rem',
                borderRadius: '20px',
                color: 'black',
                textAlign: 'center',
                boxShadow: '0 12px 40px rgba(79, 172, 254, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(79, 172, 254, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(79, 172, 254, 0.3)';
              }}>
                <div style={{ 
                  fontSize: '4rem', 
                  fontWeight: '800', 
                  marginBottom: '1rem',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                  15+
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                }}>
                  Clients
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  opacity: '0.95'
                }}>
                  A trusted community of brands that continue to grow with our partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Core Values */}
      <section style={{ padding: '100px 0', background: '#F8F7F5' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '4rem',
              color: 'var(--accent)',
            }}>
              Our Core Values
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {/* Mission */}
              <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: '#C6FB50',
                  borderRadius: '20px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  marginBottom: '1rem', 
                  color: 'var(--accent)',
                }}>
                  Mission
                </h3>
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  Our mission is to <strong>Empower Businesses to Grow Digitally</strong>.
                </p>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)'
                }}>
                  We aim to stay ahead of trends, continually learning and innovating to help brands reach their full potential.
                </p>
              </div>

              {/* Motto */}
              <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: '#C6FB50',
                  borderRadius: '20px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <path d="M13 8H7"/>
                    <path d="M17 12H7"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  marginBottom: '1rem', 
                  color: 'var(--accent)',
                }}>
                  Motto
                </h3>
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem',
                  fontStyle: 'italic',
                  fontWeight: '600'
                }}>
                  "Your Vision, Our Creation."
                </p>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)'
                }}>
                  At Bepix, every project we deliver is custom-made — designed thoughtfully to reflect your unique brand identity and drive real results.
                </p>
              </div>

              {/* Vision */}
              <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: '#C6FB50',
                  borderRadius: '20px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  marginBottom: '1rem', 
                  color: 'var(--accent)',
                }}>
                  Vision
                </h3>
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  We aspire to be recognized as <strong>The Benchmark of Digital Excellence</strong>.
                </p>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)'
                }}>
                  Continuously refining our strategies, creativity, and technology to achieve flawless performance for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Bepix? */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '4rem',
              color: 'var(--accent)',
            }}>
              Why Choose Bepix?
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {/* Affordable Excellence */}
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: '#C6FB50',
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem', 
                  color: 'var(--accent)'
                }}>
                  Affordable Excellence
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)'
                }}>
                  Whether you're a startup or an enterprise, Bepix offers industry-competitive pricing without compromising on quality. We ensure that every penny spent brings measurable value.
                </p>
              </div>

              {/* Quality Deliverance */}
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: '#C6FB50',
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"/>
                    <path d="M3 12v6c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-6"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem', 
                  color: 'var(--accent)'
                }}>
                  Quality Deliverance
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)'
                }}>
                  Perfection drives us. Our team ensures flawless execution, on-time delivery, and constant improvement based on client feedback.
                </p>
              </div>

              {/* Dedicated Support */}
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: '#C6FB50',
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <path d="M13 8H7"/>
                    <path d="M17 12H7"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem', 
                  color: 'var(--accent)'
                }}>
                  Dedicated Support
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)'
                }}>
                  We stand by our clients at every stage — providing reliable support, resolving challenges quickly, and preventing issues from reoccurring.
                </p>
              </div>

              {/* Expert Team */}
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: '#C6FB50',
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem', 
                  color: 'var(--accent)'
                }}>
                  Expert Team
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)'
                }}>
                  Our skilled professionals combine creative thinking with strategic execution to deliver digital solutions that exceed expectations.
                </p>
              </div>

              {/* Strong Online Presence */}
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: '#C6FB50',
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem', 
                  color: 'var(--accent)'
                }}>
                  Strong Online Presence
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)'
                }}>
                  We maintain a solid presence across all major digital platforms — ensuring that Bepix remains accessible, responsive, and always in tune with current trends.
                </p>
              </div>

              {/* Global Reach */}
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'left',
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: '#C6FB50',
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem', 
                  color: 'var(--accent)'
                }}>
                  Global Reach
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)'
                }}>
                  Bepix is rapidly expanding its footprint beyond India, supporting international clients across the UAE, Europe, and Southeast Asia with tailored digital strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Our Story */}
      <section style={{ padding: '100px 0', background: '#F8F7F5' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: 'var(--accent)',
            }}>
              The BePix Journey
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Founded with a vision to go beyond pixels, BePix unites innovators from diverse industries to craft purposeful design and technology solutions that inspire and empower.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Our Mission & Values */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '4rem',
            color: 'var(--accent)',
          }}>
            Innovation at the Core
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              textAlign: 'center',
              border: '1px solid #E2E8F0',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: '#C6FB50',
                borderRadius: '20px',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--accent)' }}>
                Innovation
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Constantly exploring new ideas and technologies.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              textAlign: 'center',
              border: '1px solid #E2E8F0',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: '#C6FB50',
                borderRadius: '20px',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--accent)' }}>
                Collaboration
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Building long-term relationships based on trust and creativity.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              textAlign: 'center',
              border: '1px solid #E2E8F0',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: '#C6FB50',
                borderRadius: '20px',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--accent)' }}>
                Agility
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Adapting swiftly to evolving digital challenges.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              textAlign: 'center',
              border: '1px solid #E2E8F0',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                borderRadius: '20px',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--accent)' }}>
                Impact
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Designing for sustainability and social good.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Meet Our Community */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, var(--accent) 0%, #1A202C 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
          }}>
            A Network of Visionaries
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            marginBottom: '2.5rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.6'
          }}>
            From designers and developers to marketers and entrepreneurs, BePix connects over 200 professionals worldwide in a shared mission to build the future of digital experiences.
          </p>
          <Link href="/contact#get-in-touch" style={{
            background: '#C6FB50',
            color: 'var(--accent)',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.125rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            Join the Community
          </Link>
        </div>
      </section>
    </div>
  )
}
