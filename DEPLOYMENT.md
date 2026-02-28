# Portfolio Deployment Guide

This guide provides step-by-step instructions for deploying your Rakesh Reddy T portfolio to various platforms.

## Table of Contents

1. [GitHub Pages](#github-pages)
2. [Vercel](#vercel)
3. [Netlify](#netlify)
4. [AWS S3 + CloudFront](#aws-s3--cloudfront)
5. [Custom Domain](#custom-domain)

---

## GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

The workflow file is already set up at `.github/workflows/deploy.yml`.

**Steps:**

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions"

3. The workflow will automatically deploy on every push to `main`

4. Your site will be available at: `https://github.com-username.github.io/rakesh-portfolio`

### Option 2: Manual GitHub Pages Deployment

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://github-username.github.io/rakesh-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/rakesh-portfolio/',
     // ... rest of config
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

## Vercel

Vercel is the fastest way to deploy a Vite application.

**Steps:**

1. Sign up at [vercel.com](https://vercel.com)

2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

4. Follow the prompts to set up your project

**Alternative: Connect GitHub Repository**

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

Your site will be available at a Vercel domain like `rakesh-portfolio.vercel.app`

---

## Netlify

**Steps:**

1. Sign up at [netlify.com](https://netlify.com)

2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

**Alternative: Connect GitHub Repository**

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy site"

Your site will be available at a Netlify domain like `rakesh-portfolio.netlify.app`

---

## AWS S3 + CloudFront

For a more robust hosting solution with your own domain.

**Steps:**

1. Create an S3 bucket for your website
2. Upload the contents of `dist/` folder

3. Create a CloudFront distribution pointing to your S3 bucket

4. Connect your custom domain via Route 53 or your domain registrar

For detailed instructions, see AWS documentation on [hosting static websites on S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html).

---

## Custom Domain

### Update GitHub Pages with Custom Domain

1. Purchase a domain from a provider like GoDaddy, Namecheap, etc.

2. Update DNS settings:
   - Add an `A` record pointing to `185.199.108.153`
   - Add a `CNAME` record: `www.yourdomain.com` → `username.github.io`

3. Go to your repository Settings → Pages
4. Under "Custom domain", enter your domain name
5. Click "Save"

### Update Vercel with Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

### Update Netlify with Custom Domain

1. Go to Site settings → Domain management
2. Add your custom domain
3. Update DNS at your domain registrar with the provided nameservers

---

## Environment Variables

If you need to store sensitive information:

1. Create a `.env.example` file with placeholder values
2. Create a `.env.local` file (add to `.gitignore`) with actual values
3. Access in your code:
   ```javascript
   const apiKey = import.meta.env.VITE_API_KEY
   ```

---

## Performance Optimization

Before deploying:

```bash
# Build and check bundle size
npm run build

# Preview the build locally
npm run preview
```

Monitor your site performance using:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org)

---

## Troubleshooting

### Assets not loading after deploy

Make sure your `vite.config.js` has the correct base path:

```javascript
export default {
  base: process.env.NODE_ENV === 'production' ? '/rakesh-portfolio/' : '/'
}
```

### 404 errors on GitHub Pages

Ensure you've set the base path correctly in `vite.config.js`.

### Slow deployments

Consider using a CDN for better performance:
- Vercel (built-in global CDN)
- Netlify (built-in CDN)
- CloudFlare (free CDN layer)

---

## Monitoring & Analytics

Add Google Analytics to track visitors:

1. Get a Google Analytics tracking ID
2. Add to your `public/index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

---

## Next Steps

After deploying:

1. Share your portfolio link on LinkedIn
2. Update your GitHub profile with the portfolio link
3. Test all sections and links
4. Monitor performance metrics
5. Keep your resume updated

Good luck! 🚀
