'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav style={{
      background: 'var(--white)',
      boxShadow: 'var(--shadow)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(198, 251, 80, 0.1)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '1.25rem 0',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}>
          <Link href="/" style={{
            textDecoration: 'none',
            transition: 'opacity 0.3s ease',
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center'
          }}>
            <img 
              src="/logo.svg" 
              alt="BePix Logo" 
              style={{
                height: '40px',
                width: 'auto'
              }}
            />
          </Link>
          
          {/* Desktop Menu */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            flex: '1',
            gap: '3rem'
          }}>
            <Link href="/" style={{
              color: 'var(--text-secondary)',
              fontWeight: '500',
              textDecoration: 'none',
              padding: '0.5rem 0',
              position: 'relative',
              transition: 'color 0.3s ease'
            }}>
              Home
            </Link>
            <Link href="/services" style={{
              color: 'var(--text-secondary)',
              fontWeight: '500',
              textDecoration: 'none',
              padding: '0.5rem 0',
              position: 'relative',
              transition: 'color 0.3s ease'
            }}>
              Services
            </Link>
            <Link href="/work" style={{
              color: 'var(--text-secondary)',
              fontWeight: '500',
              textDecoration: 'none',
              padding: '0.5rem 0',
              position: 'relative',
              transition: 'color 0.3s ease'
            }}>
              Work
            </Link>
            <Link href="/about-us" style={{
              color: 'var(--text-secondary)',
              fontWeight: '500',
              textDecoration: 'none',
              padding: '0.5rem 0',
              position: 'relative',
              transition: 'color 0.3s ease'
            }}>
              About Us
            </Link>
          </div>
          
          {/* Contact Button */}
          <div style={{ flex: '0 0 auto' }}>
            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, #FCB03A 0%, #FF7426 100%)',
              color: 'white',
              fontWeight: '600',
              textDecoration: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            style={{ 
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg style={{ width: '24px', height: '24px', color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{ 
            display: 'block', 
            padding: '1.5rem 0', 
            borderTop: '1px solid rgba(198, 251, 80, 0.1)',
            background: 'var(--primary)'
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <Link href="/" style={{
                color: 'var(--text-secondary)',
                fontWeight: '500',
                textDecoration: 'none',
                padding: '0.75rem 0',
                transition: 'color 0.3s ease'
              }}>
                Home
              </Link>
              <Link href="/services" style={{
                color: 'var(--text-secondary)',
                fontWeight: '500',
                textDecoration: 'none',
                padding: '0.75rem 0',
                transition: 'color 0.3s ease'
              }}>
                Services
              </Link>
              <Link href="/work" style={{
                color: 'var(--text-secondary)',
                fontWeight: '500',
                textDecoration: 'none',
                padding: '0.75rem 0',
                transition: 'color 0.3s ease'
              }}>
                Work
              </Link>
              <Link href="/about-us" style={{
                color: 'var(--text-secondary)',
                fontWeight: '500',
                textDecoration: 'none',
                padding: '0.75rem 0',
                transition: 'color 0.3s ease'
              }}>
                About Us
              </Link>
              <Link href="/contact" style={{
                background: 'linear-gradient(135deg, #FCB03A 0%, #FF7426 100%)',
                color: 'white',
                fontWeight: '600',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                maxWidth: '200px'
              }}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
