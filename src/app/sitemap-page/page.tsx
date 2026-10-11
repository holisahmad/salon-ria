import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap – Salon Ria',
  description: 'Peta situs Salon Ria – Daftar semua halaman yang tersedia.',
}

const pages = [
  {
    category: 'Halaman Utama',
    links: [
      { label: 'Beranda', href: '/', desc: 'Halaman utama Salon Ria' },
      { label: 'Layanan', href: '/#services', desc: 'Daftar lengkap layanan kecantikan kami' },
      { label: 'Tentang Kami', href: '/#about', desc: 'Sejarah dan profil Salon Ria' },
      { label: 'Kontak', href: '/#contact', desc: 'Formulir kontak dan informasi lokasi' },
    ],
  },
  {
    category: 'Informasi Legal',
    links: [
      { label: 'Kebijakan Privasi', href: '/privacy', desc: 'Kebijakan pengelolaan data pribadi' },
      { label: 'Syarat dan Ketentuan', href: '/terms', desc: 'Syarat penggunaan layanan Salon Ria' },
    ],
  },
  {
    category: 'Lainnya',
    links: [
      { label: 'Sitemap XML', href: '/sitemap.xml', desc: 'Sitemap untuk mesin pencari' },
      { label: 'Robots.txt', href: '/robots.txt', desc: 'Instruksi untuk crawler mesin pencari' },
    ],
  },
]

export default function SitemapPage() {
  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
              <circle cx="21" cy="21" r="20" stroke="#d4a574" strokeWidth="1.5" />
              <circle cx="21" cy="21" r="15" stroke="#d4a574" strokeWidth="0.5" strokeDasharray="2 3" />
              <text x="21" y="27" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="600" fill="#d4a574">R</text>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>Salon Ria</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-brand">Beauty &amp; Care</span>
            </div>
          </Link>
          <Link href="/" className="text-sm text-gray-600 hover:text-brand transition">← Kembali ke Beranda</Link>
        </div>
      </nav>

      <main className="bg-[#faf7f4] min-h-screen pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Peta Situs
          </h1>
          <p className="text-gray-500 text-sm mb-10">Daftar semua halaman yang tersedia di situs Salon Ria.</p>

          <div className="space-y-8">
            {pages.map((group) => (
              <div key={group.category} className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-stone-50 border-b border-stone-100">
                  <h2 className="font-semibold text-gray-800 text-sm uppercase tracking-widest">{group.category}</h2>
                </div>
                <ul className="divide-y divide-stone-50">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between px-6 py-4 hover:bg-[#faf7f4] transition group"
                      >
                        <div>
                          <div className="text-gray-900 font-medium text-sm group-hover:text-brand transition">{link.label}</div>
                          <div className="text-gray-400 text-xs mt-0.5">{link.desc}</div>
                        </div>
                        <span className="text-stone-300 group-hover:text-brand transition">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-stone-950 text-stone-400 py-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Salon Ria &nbsp;·&nbsp;{' '}
          <Link href="/" className="hover:text-brand transition">Beranda</Link>
        </p>
      </footer>
    </>
  )
}
