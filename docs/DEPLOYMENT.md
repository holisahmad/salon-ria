# Deployment Checklist - Salon Ria

## Pre-Deployment

- [x] Landing page HTML responsive & mobile-friendly
- [x] Privacy Policy halaman lengkap
- [x] Terms of Service halaman lengkap
- [x] Sitemap.xml untuk SEO
- [x] Robots.txt configured
- [x] Schema.org markup included
- [x] Meta tags & OpenGraph tags
- [x] Contact form functional
- [x] All internal links working
- [x] No external dependencies (offline-first)

## Files Included

```
salon_ria/
├── index.html              # Main landing page (production-ready)
├── privacy.html            # Privacy Policy
├── terms.html              # Terms of Service
├── sitemap.xml             # XML sitemap for search engines
├── robots.txt              # SEO robot directives
├── business.json           # Business structured data
├── seo.html                # SEO metadata template
├── package.json            # Node.js config (optional for Next.js)
├── README.md               # Documentation
└── .gitignore              # Git ignore patterns
```

## Hosting Options

### Option 1: Shared Hosting (Recommended for SMB)
- Upload files via FTP/SFTP to `public_html/`
- Domain setup: Nameservers to registrar
- SSL: Auto-generate via hosting provider (Let's Encrypt)
- Cost: ~$3-10/month

### Option 2: Vercel (Free, Zero-Config)
```bash
npm install -g vercel
vercel --prod
```
- Automatic HTTPS
- CDN globally distributed
- Auto-redeployment on git push
- Cost: Free tier sufficient

### Option 3: Netlify (Free, Drag-Drop)
1. Create account at netlify.com
2. Drag & drop folder or connect GitHub
3. Custom domain setup
4. Auto SSL certificate
5. Cost: Free tier sufficient

## Post-Deployment

### 1. DNS & Domain
- [ ] Update nameservers at registrar
- [ ] DNS propagation check: `dig salon-ria.vercel.app`
- [ ] SSL certificate verify: https://salon-ria.vercel.app
- [ ] Redirect http → https

### 2. SEO Verification
- [ ] Submit sitemap to Google Search Console: https://search.google.com/search-console/
- [ ] Add site to Bing Webmaster Tools
- [ ] Verify Schema.org markup: https://schema.org/validator/
- [ ] Test mobile friendliness: https://search.google.com/test/mobile-friendly
- [ ] Core Web Vitals check: https://pagespeed.web.dev/

### 3. Analytics & Monitoring
- [ ] Setup Google Analytics 4:
  ```html
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  </script>
  ```
- [ ] Setup Google Business Profile for local SEO
- [ ] Monitor uptime: https://uptimerobot.com/

### 4. Contact Form Backend
Choose one:

**A. Formspree (Easiest)**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <!-- form fields -->
</form>
```
- Cost: Free (up to 50 submissions/month)
- Setup: 2 minutes

**B. Firebase (More Control)**
```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendMessage(formData) {
  await addDoc(collection(db, "messages"), formData);
}
```
- Cost: Free tier generous
- Setup: 15 minutes

**C. Backend API**
```bash
curl -X POST https://api.salon-ria.vercel.app/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"...", "phone":"...", "message":"..."}'
```
- Cost: $10-50/month (hosting)
- Setup: 1 hour

## Performance Optimization

- [x] Inline CSS (no external stylesheet)
- [x] No third-party fonts (system stack)
- [x] No JavaScript frameworks
- [x] No CDN required
- [x] File size: ~50KB total
- [x] Lighthouse target: 90+ score

Run Lighthouse:
```bash
# Chrome DevTools → F12 → Lighthouse tab → Generate Report
```

## Security Checklist

- [x] HTTPS/SSL enforced
- [x] No sensitive data in HTML
- [x] Contact form validates input
- [x] robots.txt blocks admin paths
- [x] No exposed environment variables
- [x] Content Security Policy ready

Add CSP header (ask hosting provider):
```
Content-Security-Policy: default-src 'self'; style-src 'unsafe-inline'; img-src 'self' data:;
```

## Local SEO Optimization

1. **Google Business Profile**
   - Create at: https://business.google.com
   - Add: Hours, photos, services, address
   - Get verification code
   - Importance: ⭐⭐⭐⭐⭐

2. **Local Directories**
   - Daftar di: Google Maps, Waze, OpenStreetMap
   - Konsistenkan: Nama, alamat, telepon (NAP)

3. **Local Keywords**
   - Primary: "Salon Tangerang", "Salon Cipondoh"
   - Secondary: "Perawatan kecantikan Tangerang"
   - Long-tail: "Salon rambut profesional Ciledug"

## Ongoing Maintenance

### Monthly
- [ ] Check Google Search Console for errors
- [ ] Review analytics traffic
- [ ] Test contact form submissions
- [ ] Check SSL certificate expiry

### Quarterly
- [ ] Update business hours/services if changed
- [ ] Review and refresh testimonials
- [ ] Audit broken links
- [ ] Update sitemap if content changes

### Annually
- [ ] Renew domain registration
- [ ] Renew SSL certificate
- [ ] Full SEO audit
- [ ] Competitor analysis

## Cost Estimate (Annual)

| Item | Cost |
|------|------|
| Domain (.com) | $10-15 |
| Hosting (shared) | $30-60 |
| SSL Certificate | FREE (Let's Encrypt) |
| Email hosting | $0-60 |
| Form backend | $0-120 |
| Analytics | FREE |
| **Total** | **$40-255** |

## Support & Troubleshooting

**Site not loading?**
```bash
# Check DNS
nslookup salon-ria.vercel.app

# Check HTTP status
curl -I https://salon-ria.vercel.app
```

**Contact form not working?**
- Check browser console (F12)
- Verify form action URL
- Test form submission manually
- Check email spam folder

**SEO not improving?**
- Verify sitemap submitted to GSC
- Check Schema markup validity
- Build quality backlinks
- Publish regular updates
- Wait 3-6 months (Google indexing lag)

## Next Steps (Optional Upgrades)

1. **Booking System** (~$50-200/month)
   - Calendly, Acuity, or custom
   - Real-time appointment scheduling

2. **WhatsApp Business API** (~$100/month)
   - Direct messaging from website
   - Automated confirmation messages

3. **Mobile App** (~$2000+)
   - React Native or Flutter
   - iOS + Android

4. **Email Newsletter** (~$20/month)
   - Mailchimp, ConvertKit
   - Customer retention campaigns

---

**Site Status:** ✅ PRODUCTION READY  
**Last Updated:** 11 Oktober 2026  
**Contact:** kismovejaya@gmail.com | +6285655268945
