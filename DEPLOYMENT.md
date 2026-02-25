# ALYA - Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended) ⭐

Vercel is the recommended platform for Next.js applications (created by Next.js team).

#### Steps:

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Deploy to Production**
```bash
vercel --prod
```

#### Via Vercel Dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your Git repository
4. Click "Deploy"
5. Your site will be live at: `https://your-project.vercel.app`

**Custom Domain:**
- Go to Project Settings → Domains
- Add your domain: `alya.sa`
- Update DNS records as instructed

---

### Option 2: Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build the project**
```bash
npm run build
```

3. **Deploy**
```bash
netlify deploy --prod
```

**Build Settings:**
- Build Command: `npm run build`
- Publish Directory: `.next`
- Base Directory: (leave empty)

---

### Option 3: AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Click "Save and deploy"

---

### Option 4: Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Create `.dockerignore`:
```
node_modules
.next
.git
```

**Build and Run:**
```bash
docker build -t alya-website .
docker run -p 3000:3000 alya-website
```

---

### Option 5: VPS (DigitalOcean, Linode, etc.)

**Requirements:**
- Ubuntu 20.04+ or similar
- Node.js 18+
- PM2 (Process Manager)

#### Setup Steps:

1. **Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Install PM2**
```bash
sudo npm install -g pm2
```

3. **Clone and Setup**
```bash
cd /var/www
git clone your-repo alya
cd alya
npm install
npm run build
```

4. **Start with PM2**
```bash
pm2 start npm --name "alya" -- start
pm2 save
pm2 startup
```

5. **Setup Nginx**
```nginx
server {
    listen 80;
    server_name alya.sa www.alya.sa;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. **Setup SSL with Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d alya.sa -d www.alya.sa
```

---

## 🔧 Pre-Deployment Checklist

### Essential Tasks:

- [ ] **Test Production Build Locally**
  ```bash
  npm run build
  npm start
  ```

- [ ] **Environment Variables**
  - Set `NEXT_PUBLIC_SITE_URL` to your production URL
  - Add any API keys or secrets

- [ ] **Images**
  - Add all brand images to `public/images/`
  - Optimize images (use WebP format)
  - Check image sizes (< 500KB)

- [ ] **Content**
  - Update company data in `data/company.js`
  - Update brands data in `data/brands.js`
  - Check all Arabic text for typos

- [ ] **SEO**
  - Verify meta descriptions
  - Check Open Graph images
  - Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

- [ ] **Performance**
  - Run Lighthouse audit (Chrome DevTools)
  - Check Core Web Vitals
  - Test loading speed

- [ ] **Mobile Testing**
  - Test on actual mobile devices
  - Check RTL layout on mobile
  - Verify touch targets (min 44px)

- [ ] **Browser Testing**
  - Chrome
  - Safari
  - Firefox
  - Edge

- [ ] **Accessibility**
  - Test with screen reader
  - Check keyboard navigation
  - Verify color contrast

---

## 📊 Post-Deployment

### Analytics (Optional)

**Google Analytics:**
1. Create GA4 property
2. Add tracking ID to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add to `app/layout.jsx`

**Microsoft Clarity:**
1. Create project at [clarity.microsoft.com](https://clarity.microsoft.com)
2. Add tracking code to layout

### Monitoring

**Vercel Analytics:**
- Automatic on Vercel platform
- View in Vercel dashboard

**Uptime Monitoring:**
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://www.pingdom.com)

### Performance Monitoring

**Lighthouse CI:**
```bash
npm install -g @lhci/cli
lhci autorun --upload.target=temporary-public-storage
```

---

## 🔒 Security

- [ ] Enable HTTPS/SSL
- [ ] Set security headers in `next.config.js`
- [ ] Keep dependencies updated
- [ ] Use environment variables for secrets
- [ ] Enable CORS if needed

### Security Headers Example:

```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ]
  },
}
```

---

## 📱 Custom Domain Setup

### DNS Configuration:

For `alya.sa`:

**A Records:**
```
@ → [Your Server IP or Vercel IP]
www → [Your Server IP or Vercel IP]
```

**CNAME (for Vercel):**
```
www → cname.vercel-dns.com
```

**Propagation:**
- DNS changes can take 24-48 hours
- Check status: [whatsmydns.net](https://www.whatsmydns.net)

---

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Check image paths (case-sensitive)
- Verify images exist in `public/images/`
- Check image permissions

### Fonts Not Loading

- Verify Google Fonts import in `globals.css`
- Check network tab for font loading errors

### RTL Issues

- Ensure `dir="rtl"` in `<html>` tag
- Check CSS direction property
- Verify Tailwind RTL classes

---

## 📞 Support

For deployment issues:
- **Vercel:** [vercel.com/support](https://vercel.com/support)
- **Netlify:** [netlify.com/support](https://www.netlify.com/support)
- **AWS:** [aws.amazon.com/support](https://aws.amazon.com/support)

---

**Ready to Deploy! 🚀**

Choose your preferred platform and follow the steps above.
