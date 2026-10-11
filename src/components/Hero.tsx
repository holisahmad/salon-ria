'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        {/* High-quality salon/beauty photo from Unsplash */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=85&w=1920&auto=format&fit=crop"
          alt="Salon Ria – Suasana salon kecantikan elegan"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Layered gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* ── Decorative corner lines ── */}
      <div className="absolute top-32 left-8 w-16 h-16 border-l-2 border-t-2 border-brand/50 hidden md:block" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-r-2 border-b-2 border-brand/50 hidden md:block" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow tag */}
          <div className="animate-fade-up flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-brand" />
            <span className="text-brand text-xs uppercase tracking-[0.3em] font-medium">
              Salon Kecantikan Profesional
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="animate-fade-up-delay-1 text-5xl md:text-7xl font-bold leading-tight text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Kecantikan Anda,
            <br />
            <span className="italic text-brand">Prioritas Kami</span>
          </h1>

          {/* Sub-headline */}
          <p className="animate-fade-up-delay-2 text-white/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
            Salon Ria menghadirkan pengalaman perawatan kecantikan premium dengan terapis bersertifikat dan produk internasional pilihan, di jantung Tangerang.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/6285655268945"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Booking via WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white hover:border-brand hover:bg-white/10 px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 backdrop-blur-sm"
            >
              Jelajahi Layanan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Stats bar at bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-t-2xl px-8 py-5 grid grid-cols-3 gap-4 md:gap-8">
            {[
              { value: '10+', label: 'Tahun Pengalaman' },
              { value: '500+', label: 'Pelanggan Puas' },
              { value: '4.8 ★', label: 'Rating Google' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold text-brand"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs md:text-sm mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-36 right-8 hidden lg:flex flex-col items-center gap-2 z-10">
        <div className="text-white/50 text-xs tracking-[0.2em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}
