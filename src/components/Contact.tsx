'use client'

import { useState } from 'react'

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Lokasi',
    value: 'Jl. HOS Cokroaminoto No. 58 E\nRT001/001, Kec. Cipondoh\nCiledug, Tangerang 15151',
    href: 'https://maps.google.com/?q=Jl+HOS+Cokroaminoto+58E+Tangerang',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9v2z" />
      </svg>
    ),
    label: 'Telepon',
    value: '+62 856 5526 8945',
    href: 'tel:+6285655268945',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'kismovejaya@gmail.com',
    href: 'mailto:kismovejaya@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Jam Buka',
    value: 'Senin – Minggu\n09:00 – 19:00 WIB',
    href: null,
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 bg-[#faf7f4]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-brand text-xs uppercase tracking-[0.3em] font-medium mb-4">Kami Siap Membantu</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Hubungi Kami
          </h2>
          <div className="ornament-divider max-w-sm mx-auto mb-6">
            <span className="text-brand text-lg">✦</span>
          </div>
          <p className="text-gray-500 max-w-xl mx-auto">
            Siap menjawab pertanyaan Anda dan membantu merencanakan kunjungan yang sempurna.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-stone-100 luxury-card group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-brand uppercase tracking-widest font-medium mb-1">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-700 text-sm leading-relaxed hover:text-brand transition-colors whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp quick CTA */}
            <a
              href="https://wa.me/6285655268945"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-green-200 hover:-translate-y-0.5"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat WhatsApp Sekarang
            </a>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
              <h3
                className="text-2xl font-semibold text-gray-900 mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Kirim Pesan
              </h3>
              <p className="text-gray-500 text-sm mb-8">Isi form berikut dan kami akan menghubungi Anda segera.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-[#faf7f4] focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand text-sm transition"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">No. Telepon</label>
                    <input
                      type="tel"
                      placeholder="+62..."
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-[#faf7f4] focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand text-sm transition"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Pilih Layanan</label>
                  <select className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-[#faf7f4] focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand text-sm text-gray-700 transition" suppressHydrationWarning>
                    <option value="">Pilih layanan yang diinginkan</option>
                    <option>Perawatan Wajah</option>
                    <option>Potong &amp; Styling Rambut</option>
                    <option>Manicure &amp; Pedicure</option>
                    <option>Massage &amp; Spa</option>
                    <option>Makeup Profesional</option>
                    <option>Perawatan Kulit Organik</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Pesan</label>
                  <textarea
                    placeholder="Tuliskan pertanyaan atau kebutuhan Anda..."
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-[#faf7f4] focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand text-sm transition resize-none"
                  />
                </div>

                {submitted && (
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl text-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Pesan terkirim! Kami akan segera menghubungi Anda.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand text-white py-4 rounded-xl font-semibold tracking-wide hover:bg-brand-dark transition-all duration-300 shadow-md shadow-brand/20 hover:-translate-y-0.5 disabled:opacity-70 disabled:translate-y-0 flex items-center justify-center gap-2"
                  suppressHydrationWarning
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 11-6.219-8.56" />
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    'Kirim Pesan'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
