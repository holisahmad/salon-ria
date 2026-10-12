import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const ADMIN_EMAIL = 'kismovejaya@gmail.com'
const SALON_NAME = 'Salon Ria'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nama, telepon, layanan, pesan } = body

    // Validasi input
    if (!nama || !telepon) {
      return NextResponse.json(
        { error: 'Nama dan telepon wajib diisi.' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta',
      dateStyle: 'full',
      timeStyle: 'short',
    })

    // Kirim email ke admin salon
    const { error } = await resend.emails.send({
      from: `${SALON_NAME} <onboarding@resend.dev>`,
      to: ADMIN_EMAIL,
      replyTo: undefined,
      subject: `📩 Pesan Baru dari ${nama} – ${layanan || 'Pertanyaan Umum'}`,
      html: `
        <!DOCTYPE html>
        <html lang="id">
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
        <body style="margin:0;padding:0;background:#f9f5f1;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f5f1;padding:40px 20px;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
                
                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#1c1917 0%,#292524 100%);padding:32px 40px;text-align:center;">
                    <div style="display:inline-block;width:52px;height:52px;border:2px solid #d4a574;border-radius:50%;line-height:52px;text-align:center;font-size:22px;font-weight:bold;color:#d4a574;font-family:Georgia,serif;margin-bottom:12px;">R</div>
                    <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;font-family:Georgia,serif;letter-spacing:1px;">Salon Ria</h1>
                    <p style="margin:4px 0 0;color:#d4a574;font-size:11px;letter-spacing:3px;text-transform:uppercase;">Pesan Baru Masuk</p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:40px;">
                    <p style="margin:0 0 24px;color:#6b7280;font-size:14px;line-height:1.6;">
                      Halo Admin, ada calon pelanggan yang mengirim pesan melalui website <strong>salonria.com</strong> pada <strong>${timestamp}</strong>.
                    </p>

                    <!-- Info pelanggan -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf7f4;border-radius:12px;padding:4px;margin-bottom:24px;">
                      <tr>
                        <td style="padding:16px 20px;border-bottom:1px solid #f0ebe4;">
                          <span style="display:block;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#d4a574;font-weight:600;margin-bottom:4px;">Nama</span>
                          <span style="font-size:16px;font-weight:600;color:#1c1917;">${escapeHtml(nama)}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px 20px;border-bottom:1px solid #f0ebe4;">
                          <span style="display:block;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#d4a574;font-weight:600;margin-bottom:4px;">No. Telepon</span>
                          <span style="font-size:15px;color:#374151;">${escapeHtml(telepon)}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px 20px;border-bottom:1px solid #f0ebe4;">
                          <span style="display:block;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#d4a574;font-weight:600;margin-bottom:4px;">Layanan yang Diminati</span>
                          <span style="font-size:15px;color:#374151;">${escapeHtml(layanan || 'Tidak disebutkan')}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px 20px;">
                          <span style="display:block;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#d4a574;font-weight:600;margin-bottom:6px;">Pesan</span>
                          <span style="font-size:14px;color:#374151;line-height:1.7;display:block;">${escapeHtml(pesan || 'Tidak ada pesan tambahan.')}</span>
                        </td>
                      </tr>
                    </table>

                    <!-- CTA buttons -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right:8px;" width="50%">
                          <a href="https://wa.me/${telepon.replace(/[^0-9]/g, '').replace(/^0/, '62')}"
                            style="display:block;background:#25d366;color:#ffffff;text-align:center;padding:14px;border-radius:10px;font-weight:600;font-size:14px;text-decoration:none;">
                            💬 Balas via WhatsApp
                          </a>
                        </td>
                        <td style="padding-left:8px;" width="50%">
                          <a href="tel:${escapeHtml(telepon)}"
                            style="display:block;background:#d4a574;color:#ffffff;text-align:center;padding:14px;border-radius:10px;font-weight:600;font-size:14px;text-decoration:none;">
                            📞 Hubungi Sekarang
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#faf7f4;padding:20px 40px;text-align:center;border-top:1px solid #f0ebe4;">
                    <p style="margin:0;font-size:12px;color:#9ca3af;">
                      Email ini dikirim otomatis dari <a href="https://salon-ria.vercel.app" style="color:#d4a574;text-decoration:none;">salonria.com</a>
                      &nbsp;·&nbsp; Jl. HOS Cokroaminoto No. 58 E, Tangerang
                    </p>
                  </td>
                </tr>

              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Gagal mengirim email. Silakan coba lagi.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server.' },
      { status: 500 }
    )
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
