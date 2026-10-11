'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* SVG Logo Mark */}
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            {/* Outer circle */}
            <circle
              cx="21"
              cy="21"
              r="20"
              stroke="#d4a574"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Inner decorative circle */}
            <circle
              cx="21"
              cy="21"
              r="15"
              stroke="#d4a574"
              strokeWidth="0.5"
              strokeDasharray="2 3"
              fill="none"
            />
            {/* Stylized "R" letter */}
            <text
              x="21"
              y="27"
              textAnchor="middle"
              fontFamily="Playfair Display, Georgia, serif"
              fontSize="18"
              fontWeight="600"
              fill="#d4a574"
            >
              R
            </text>
          </svg>

          <div className="flex flex-col leading-none">
            <span
              className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white drop-shadow'
              }`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Salon Ria
            </span>
            <span
              className={`text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-brand' : 'text-brand-light'
              }`}
            >
              Beauty &amp; Care
            </span>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Layanan', 'Tentang', 'Kontak'].map((item) => (
            <a
              key={item}
              href={`#${item === 'Layanan' ? 'services' : item === 'Tentang' ? 'about' : 'contact'}`}
              className={`text-sm tracking-wider uppercase font-medium transition-all duration-300 hover:text-brand relative group ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/6285655268945"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${
            scrolled
              ? 'bg-brand text-white border-brand hover:bg-brand-dark'
              : 'bg-white/10 backdrop-blur-sm text-white border-white/40 hover:bg-white hover:text-brand'
          }`}
        >
          {/* WhatsApp Icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Booking WhatsApp
        </a>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-stone-100 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 py-4' : 'max-h-0'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4">
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-widest text-gray-700 hover:text-brand py-2 border-b border-stone-100">Layanan</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-widest text-gray-700 hover:text-brand py-2 border-b border-stone-100">Tentang</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-widest text-gray-700 hover:text-brand py-2 border-b border-stone-100">Kontak</a>
          <a
            href="https://wa.me/6285655268945"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand text-white text-sm font-semibold py-3 px-6 rounded-full text-center hover:bg-brand-dark transition mt-2"
          >
            Booking WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}
