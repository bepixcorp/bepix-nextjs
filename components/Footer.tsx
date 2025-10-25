import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--accent)',
      color: 'var(--white)',
      padding: '3rem 0 1.5rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'var(--white)'
            }}>
              BePix
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              A creative powerhouse for startups and businesses, organizations to build & scale their digital presence.
            </p>
          </div>
          
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'var(--white)'
            }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/services" style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Design Services
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/services" style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Development Services
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/services" style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Digital Marketing
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/services" style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'var(--white)'
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/about" style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/work" style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Our Work
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/contact" style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Contact Us
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="#" style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Community
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'var(--white)'
            }}>
              Get in Touch
            </h4>
            <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              <p style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                📧 contact@bepix.in
              </p>
              <p style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                📞 9344148837
              </p>
              <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                🌐 www.bepix.in
              </p>
              <Link href="/contact" style={{
                background: 'var(--secondary)',
                color: 'var(--accent)',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}>
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            &copy; 2025 BePix Tech Services LLP. All rights reserved.
          </p>
          <p style={{ fontSize: '0.875rem' }}>
            BePix Tech Services is a registered entity under the BePix Community Ecosystem.
          </p>
        </div>
      </div>
    </footer>
  )
}
