import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi – Salon Ria',
  description: 'Kebijakan Privasi Salon Ria – Informasi tentang bagaimana kami mengelola data pribadi Anda.',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Nav */}
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
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-brand transition">Beranda</Link>
            <Link href="/privacy" className="text-sm text-brand font-medium">Privasi</Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-brand transition">Ketentuan</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="bg-[#faf7f4] min-h-screen pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6 bg-white rounded-2xl shadow-sm border border-stone-100 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Kebijakan Privasi
          </h1>
          <p className="text-sm text-gray-400 mb-10 pb-6 border-b border-stone-100">
            Terakhir diperbarui: 11 Oktober 2026
          </p>

          <Section title="1. Pendahuluan">
            <p>Salon Ria mengoperasikan situs web salonria.com. Halaman ini menginformasikan kebijakan privasi kami mengenai pengumpulan, penggunaan, dan pengungkapan data pribadi ketika Anda menggunakan Situs kami.</p>
          </Section>

          <Section title="2. Jenis Data yang Kami Kumpulkan">
            <h3 className="font-semibold text-gray-800 mb-2 mt-4">Data Pribadi</h3>
            <p>Kami dapat mengumpulkan informasi berikut melalui formulir kontak:</p>
            <List items={['Nama lengkap', 'Nomor telepon', 'Alamat email', 'Pesan atau pertanyaan Anda', 'Layanan yang diminati']} />

            <h3 className="font-semibold text-gray-800 mb-2 mt-4">Data Penggunaan</h3>
            <p>Kami juga mengumpulkan informasi teknis seperti alamat IP, jenis browser, halaman yang dikunjungi, dan durasi kunjungan.</p>
          </Section>

          <Section title="3. Penggunaan Data">
            <p>Data yang kami kumpulkan digunakan untuk:</p>
            <List items={[
              'Merespons pertanyaan dan permintaan Anda',
              'Menghubungi Anda tentang layanan kami',
              'Meningkatkan dan mengoptimalkan Situs kami',
              'Menganalisis tren dan statistik penggunaan',
              'Mematuhi kewajiban hukum',
            ]} />
          </Section>

          <Section title="4. Basis Hukum untuk Pemrosesan">
            <p>Kami memproses data pribadi Anda berdasarkan persetujuan yang diberikan melalui formulir kontak. Anda dapat menarik persetujuan kapan saja dengan menghubungi kami.</p>
          </Section>

          <Section title="5. Berbagi Data">
            <p>Kami tidak menjual atau mentransfer informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum.</p>
          </Section>

          <Section title="6. Keamanan Data">
            <p>Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang tepat untuk melindungi data pribadi Anda. Namun, tidak ada metode transmisi internet yang 100% aman.</p>
          </Section>

          <Section title="7. Retensi Data">
            <p>Kami menyimpan data pribadi Anda selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini, umumnya selama 2 tahun.</p>
          </Section>

          <Section title="8. Hak Anda">
            <p>Anda memiliki hak berikut:</p>
            <List items={[
              'Hak Akses – meminta akses ke data yang kami simpan',
              'Hak Perbaikan – meminta koreksi data yang tidak akurat',
              'Hak Penghapusan – meminta penghapusan data Anda',
              'Hak Pembatasan – meminta pembatasan pemrosesan',
              'Hak Portabilitas – meminta salinan data dalam format portabel',
            ]} />
          </Section>

          <Section title="9. Cookie">
            <p>Situs kami menggunakan cookie untuk meningkatkan pengalaman pengguna. Anda dapat mengatur browser untuk menolak cookie.</p>
          </Section>

          <Section title="10. Perubahan Kebijakan">
            <p>Kami dapat memperbarui kebijakan ini sewaktu-waktu. Perubahan akan diberitahukan dengan memperbarui halaman ini.</p>
          </Section>

          <Section title="11. Hubungi Kami">
            <p>Untuk pertanyaan tentang kebijakan privasi ini:</p>
            <List items={[
              'Email: kismovejaya@gmail.com',
              'Telepon: +62 856 5526 8945',
              'Alamat: Jl. HOS Cokroaminoto No. 58 E, Ciledug, Tangerang 15151',
            ]} />
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Salon Ria &nbsp;·&nbsp;{' '}
          <Link href="/" className="hover:text-brand transition">Beranda</Link>
          {' '}&nbsp;·&nbsp;{' '}
          <Link href="/terms" className="hover:text-brand transition">Ketentuan</Link>
        </p>
      </footer>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2
        className="text-xl font-semibold text-brand mb-3 pb-2 border-b border-brand/20"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {title}
      </h2>
      <div className="text-gray-600 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5 pl-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-brand mt-1 flex-shrink-0">✦</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
