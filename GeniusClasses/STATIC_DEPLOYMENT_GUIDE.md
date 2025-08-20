# 🚀 Static Deployment Guide - GitHub Pages & Vercel

Your website has been converted for **static deployment** (no backend needed). Here's how to deploy it properly:

## 📁 Files Ready for Deployment

After building, these are the key files for deployment:
- `dist/` folder - Contains your built website
- `vercel.json` - Vercel configuration
- All source code in `client/src/`

## Method 1: 🔥 Vercel Deployment (Recommended)

### Step 1: Build the Site
```bash
cd client
npm run build
```

### Step 2: Deploy to Vercel
1. Visit [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"New Project"**
3. Import your GitHub repository
4. **IMPORTANT**: Configure these settings:
   - **Framework Preset**: Vite
   - **Build Command**: `cd client && npm run build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `npm install`

### Step 3: Deploy
- Click **"Deploy"**
- Your site will be live at `https://your-project.vercel.app`

## Method 2: 📱 GitHub Pages

### Step 1: Create Repository
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/genius-classes-website.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main**
5. Folder: **/ (root)**

### Step 3: Add GitHub Actions (Optional - for automatic builds)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: cd client && npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./client/dist
```

## Method 3: 💾 Manual Upload to Any Host

### Step 1: Build
```bash
cd client
npm run build
```

### Step 2: Upload
- Upload everything in the `client/dist/` folder to your web hosting provider
- Point your domain to the uploaded files

## 📝 Contact Form Setup (Optional)

The contact form currently uses a demo configuration. To make it fully functional:

### Option A: Formspree (Free)
1. Visit [formspree.io](https://formspree.io)
2. Create account and new form
3. Get your form ID
4. In `client/src/components/Contact.tsx`, replace `YOUR_FORM_ID` with your actual ID:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
```

### Option B: Netlify Forms (If using Netlify)
1. Add `netlify` attribute to form tag in Contact.tsx
2. Forms will appear in your Netlify dashboard

### Option C: Google Forms
1. Create a Google Form
2. Update the form action to point to your Google Form

## 🔧 Troubleshooting

### Vercel Issues:
- **Empty page**: Check if build command is `cd client && npm run build`
- **404 errors**: Make sure `vercel.json` is in root directory
- **Build fails**: Ensure all dependencies are installed

### GitHub Pages Issues:
- **Shows README**: Make sure you built the project and committed `dist` folder
- **404 on refresh**: GitHub Pages doesn't support SPA routing by default

### General Issues:
- **Images not loading**: Check image URLs in `client/src/config/images.ts`
- **Styling broken**: Ensure Tailwind CSS is building correctly

## 📱 Quick Test

After deployment, test these features:
- ✅ All sections load properly
- ✅ Navigation works (smooth scrolling)
- ✅ Contact form submits (shows success message)
- ✅ WhatsApp button opens WhatsApp
- ✅ Phone numbers are clickable
- ✅ Google Maps loads
- ✅ Social media links work
- ✅ Responsive on mobile

## 🎯 Next Steps

1. **Custom Domain**: Add your own domain in Vercel/hosting settings
2. **Analytics**: Add Google Analytics to track visitors
3. **SEO**: Submit to Google Search Console
4. **Content**: Replace placeholder images with actual photos
5. **Social Media**: Update all social links with real profiles

---

🎉 **Your website is now ready for the world!**