'use client'

const highlights = [
  { icon: '✦', text: 'Terapis bersertifikat internasional dan berpengalaman' },
  { icon: '✦', text: 'Produk premium dari merek ternama dunia' },
  { icon: '✦', text: 'Lingkungan bersih, nyaman, dan steril' },
  { icon: '✦', text: 'Harga kompetitif dengan kualitas yang terjamin' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Image with decorative frame ── */}
          <div className="relative">
            {/* Decorative gold border frame */}
            <div className="absolute -top-4 -left-4 w-48 h-48 border-2 border-brand/30 rounded-2xl z-0" />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border-2 border-brand/20 rounded-2xl z-0" />

            {/* Main image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-stone-200/80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
                alt="Suasana salon Ria yang elegan"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-xl">
                <div
                  className="text-2xl font-bold text-brand"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  10+ Tahun
                </div>
                <div className="text-gray-600 text-sm">Melayani dengan sepenuh hati</div>
              </div>
            </div>

            {/* Small accent photo */}
            <div className="absolute -right-8 top-1/3 hidden xl:block z-20 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop"
                alt="Detail perawatan di Salon Ria"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div>
            <p className="text-brand text-xs uppercase tracking-[0.3em] font-medium mb-4">Cerita Kami</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Tentang
              <br />
              <span className="italic">Salon Ria</span>
            </h2>
            <div className="ornament-divider max-w-xs mb-6">
              <span className="text-brand">✦</span>
            </div>

            {/* Blockquote */}
            <blockquote className="border-l-4 border-brand pl-5 mb-6 italic text-gray-500 text-lg leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
              &ldquo;Setiap wanita berhak merasakan kecantikan terbaiknya — dan kami ada untuk mewujudkannya.&rdquo;
            </blockquote>

            <p className="text-gray-600 leading-relaxed mb-4">
              Salon Ria adalah salon kecantikan profesional yang telah melayani masyarakat Tangerang selama lebih dari <strong className="text-gray-800">10 tahun</strong> dengan dedikasi penuh. Kami percaya bahwa kecantikan sejati lahir dari perawatan yang tepat dan pengalaman yang menyenangkan.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Dengan tim terapis bersertifikat, produk premium pilihan, dan suasana salon yang nyaman, setiap kunjungan ke Salon Ria adalah pengalaman yang tak terlupakan.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-brand text-sm flex-shrink-0 mt-0.5">{item.icon}</span>
                  <span className="text-gray-700 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#faf7f4] rounded-xl p-5">
                <div className="text-brand font-bold text-sm mb-1 uppercase tracking-wider">Alamat</div>
                <div className="text-gray-700 text-sm leading-relaxed">
                  Jl. HOS Cokroaminoto No. 58 E<br />
                  Ciledug, Tangerang 15151
                </div>
              </div>
              <div className="bg-[#faf7f4] rounded-xl p-5">
                <div className="text-brand font-bold text-sm mb-1 uppercase tracking-wider">Jam Buka</div>
                <div className="text-gray-700 text-sm leading-relaxed">
                  Senin – Minggu<br />
                  09:00 – 19:00 WIB
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Full-width testimonial strip ── */}
        <div className="mt-20 bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl px-10 py-12 text-center relative overflow-hidden">
          {/* decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand/5 rounded-full translate-x-1/2 translate-y-1/2" />
          <p className="text-brand text-xs uppercase tracking-[0.3em] mb-4 relative z-10">Apa Kata Pelanggan</p>
          <p
            className="text-white text-2xl md:text-3xl italic font-medium mb-6 relative z-10 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            &ldquo;Sudah langganan lebih dari 5 tahun. Pelayananya ramah, hasilnya selalu memuaskan. Salon Ria yang terbaik di Tangerang!&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-bold text-sm">S</div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">Sari Dewi</div>
              <div className="text-white/50 text-xs">Pelanggan Setia, ★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
