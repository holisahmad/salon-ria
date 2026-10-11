import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Syarat dan Ketentuan – Salon Ria',
  description: 'Syarat dan Ketentuan Layanan Salon Ria – Panduan penggunaan layanan, tanggung jawab pengguna, dan hak atas konten.',
}

export default function TermsPage() {
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
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-brand transition">Privasi</Link>
            <Link href="/terms" className="text-sm text-brand font-medium">Ketentuan</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="bg-[#faf7f4] min-h-screen pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6 bg-white rounded-2xl shadow-sm border border-stone-100 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Syarat dan Ketentuan
          </h1>
          <p className="text-sm text-gray-400 mb-10 pb-6 border-b border-stone-100">
            Terakhir diperbarui: 11 Oktober 2026
          </p>

          <Section title="1. Penerimaan Syarat">
            <p>Dengan mengakses dan menggunakan situs web Salon Ria atau menggunakan layanan kami, Anda setuju untuk terikat dengan syarat dan ketentuan ini.</p>
          </Section>

          <Section title="2. Definisi">
            <List items={[
              'Situs: situs web salonria.com beserta semua konten dan layanan di dalamnya',
              'Layanan: layanan salon kecantikan profesional yang kami tawarkan',
              'Pengguna: individu yang mengakses atau menggunakan Situs atau layanan kami',
              'Konten: semua teks, gambar, video, dan materi lain yang ada di Situs',
            ]} />
          </Section>

          <Section title="3. Penggunaan Situs">
            <p>Anda setuju untuk tidak melakukan hal berikut:</p>
            <List items={[
              'Aktivitas yang melanggar hukum atau peraturan yang berlaku',
              'Mengirimkan konten yang menyinggung atau diskriminatif',
              'Mencoba mengakses sistem kami secara tidak sah',
              'Mengirimkan virus atau malware',
              'Membuat beban berlebihan pada server kami',
            ]} />
          </Section>

          <Section title="4. Hak Atas Konten">
            <h3 className="font-semibold text-gray-800 mb-2 mt-4">Konten Kami</h3>
            <p>Semua konten di Situs adalah properti Salon Ria dan dilindungi oleh undang-undang hak cipta. Anda tidak dapat menggunakannya tanpa izin tertulis.</p>

            <h3 className="font-semibold text-gray-800 mb-2 mt-4">Konten Pengguna</h3>
            <p>Konten yang Anda kirimkan (ulasan, pesan) memberikan Salon Ria lisensi non-eksklusif untuk menggunakannya dalam konteks operasional Situs.</p>
          </Section>

          <Section title="5. Penafian Tanggung Jawab">
            <p>Situs dan layanan disediakan "sebagaimana adanya". Kami tidak menjamin bahwa:</p>
            <List items={[
              'Situs akan bebas dari kesalahan atau gangguan',
              'Informasi di Situs selalu akurat dan terkini',
              'Akses ke Situs tidak akan pernah terputus',
            ]} />
          </Section>

          <Section title="6. Pembatalan Janji Temu">
            <p>Pelanggan dapat membatalkan janji temu paling lambat <strong>24 jam sebelum jadwal</strong>. Pembatalan kurang dari 24 jam dapat dikenakan biaya sesuai kebijakan kami.</p>
          </Section>

          <Section title="7. Harga dan Pembayaran">
            <p>Harga layanan dapat berubah tanpa pemberitahuan sebelumnya. Kami akan berusaha menginformasikan perubahan signifikan kepada pelanggan kami.</p>
          </Section>

          <Section title="8. Pembatasan Tanggung Jawab">
            <p>Dalam situasi apa pun, tanggung jawab Salon Ria tidak akan melebihi nilai pembayaran yang Anda lakukan untuk layanan kami.</p>
          </Section>

          <Section title="9. Perubahan Syarat">
            <p>Kami dapat mengubah syarat ini kapan saja. Penggunaan Situs yang berkelanjutan setelah perubahan berarti Anda menerima syarat yang telah diperbarui.</p>
          </Section>

          <Section title="10. Hukum yang Berlaku">
            <p>Syarat ini diatur oleh hukum Republik Indonesia. Semua sengketa diselesaikan melalui pengadilan yang berwenang di Indonesia.</p>
          </Section>

          <Section title="11. Hubungi Kami">
            <p>Untuk pertanyaan tentang syarat ini:</p>
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
          <Link href="/privacy" className="hover:text-brand transition">Privasi</Link>
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
