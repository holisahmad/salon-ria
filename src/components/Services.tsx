'use client'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3C16 3 8 8 8 16a8 8 0 0016 0c0-8-8-13-8-13z" />
        <path d="M12 20c0 0 1-4 4-4s4 4 4 4" />
        <circle cx="14" cy="14" r="1" fill="currentColor" stroke="none" />
        <circle cx="18" cy="14" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Perawatan Wajah',
    description: 'Facial, steam, acne treatment, dan perawatan kulit khusus dengan produk premium untuk kulit sehat bercahaya.',
    tag: 'Terpopuler',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4C12 4 8 8 8 14s4 10 8 10 8-4 8-10" />
        <path d="M24 14c0-4-2-7-4-9" />
        <path d="M8 20c-2-1-4 0-4 2" />
        <path d="M8 22c0 3 3 5 8 5" />
      </svg>
    ),
    title: 'Potong & Styling Rambut',
    description: 'Potongan modern, coloring, smoothing, rebonding, dan styling profesional mengikuti tren terkini.',
    tag: null,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="20" height="16" rx="2" />
        <path d="M12 10V8a4 4 0 018 0v2" />
        <path d="M11 20l2 2 4-4" />
      </svg>
    ),
    title: 'Manicure & Pedicure',
    description: 'Nail art kreatif, shellac tahan lama, dan perawatan kuku premium dengan desain custom sesuai selera.',
    tag: null,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12C6 7 10 4 16 4s10 3 10 8c0 8-6 16-10 16S6 20 6 12z" />
        <path d="M12 14c0 0 1 3 4 3s4-3 4-3" />
        <path d="M12 10h.01M20 10h.01" />
      </svg>
    ),
    title: 'Massage & Spa',
    description: 'Massage relaksasi, refleksi, aromaterapi, dan perawatan tubuh holistik untuk melepas penat.',
    tag: 'Relaxing',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="10" r="6" />
        <path d="M6 28v-2a10 10 0 0120 0v2" />
        <path d="M13 10c0 0 1 3 3 3s3-3 3-3" />
      </svg>
    ),
    title: 'Makeup Profesional',
    description: 'Makeup natural sehari-hari, makeup pesta glamour, dan makeup pengantin untuk acara spesial tak terlupakan.',
    tag: null,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4C10 4 6 8 6 14c0 4 2 7 5 9l5 5 5-5c3-2 5-5 5-9 0-6-4-10-10-10z" />
        <path d="M12 16s1-4 4-4 4 4 4 4" />
      </svg>
    ),
    title: 'Perawatan Kulit Organik',
    description: 'Treatment eksklusif dengan bahan-bahan alami pilihan, ramah kulit sensitif dan ramah lingkungan.',
    tag: 'Organik',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#faf7f4]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-brand text-xs uppercase tracking-[0.3em] font-medium mb-4">Apa yang Kami Tawarkan</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Layanan Premium
          </h2>
          {/* Ornamental divider */}
          <div className="ornament-divider max-w-sm mx-auto mb-6">
            <span className="text-brand text-lg">✦</span>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Kami menghadirkan pengalaman kecantikan holistik dengan layanan lengkap dan standar profesional untuk setiap pelanggan.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="luxury-card group relative bg-white rounded-2xl p-7 border border-stone-100 hover:border-brand/30 overflow-hidden"
            >
              {/* Hover gold line top */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Tag */}
              {service.tag && (
                <span className="absolute top-5 right-5 text-[10px] uppercase tracking-widest text-brand border border-brand/40 rounded-full px-2.5 py-1 font-medium">
                  {service.tag}
                </span>
              )}

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand/10 text-brand mb-5 transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                {service.icon}
              </div>

              {/* Text */}
              <h3
                className="text-xl font-semibold text-gray-900 mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>

              {/* Learn more link */}
              <div className="mt-5 flex items-center gap-2 text-brand text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Pelajari lebih lanjut</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/6285655268945"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/20 hover:-translate-y-0.5"
          >
            Konsultasi Gratis via WhatsApp
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
