# 🚀 Deployment Guide for Genius Classes Website

## Pre-Deployment Checklist

### 1. Update Your Content
Before deploying, customize these files with your actual information:

#### 📸 Images (`client/src/config/images.ts`)
Replace all Unsplash URLs with your actual photos:
- Hero section teaching image
- Gallery images (8 photos of your coaching center)
- Results celebration image
- Open Graph image for social sharing

#### 📱 Social Media Links (`client/src/config/contacts.ts`)
Update these with your real social media pages:
```typescript
social: {
  facebook: "https://facebook.com/your-actual-page",
  instagram: "https://instagram.com/your-actual-page", 
  youtube: "https://youtube.com/@your-actual-channel",
}
```

#### 🗺️ Google Maps (Optional)
If you want a custom embedded map:
1. Go to Google Maps
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Update `mapsEmbed` in `client/src/config/contacts.ts`

### 2. SEO Configuration
Update the domain in `client/src/config/contacts.ts`:
```typescript
openGraph: {
  url: "https://your-actual-domain.com" // Replace with your domain
}
```

## Deployment Options

### 🔥 Option 1: Vercel (Recommended - Free)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Genius Classes website"
   git branch -M main
   git remote add origin https://github.com/yourusername/genius-classes-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project" 
   - Import your GitHub repository
   - Click "Deploy" (Vercel auto-detects the settings)
   - Your site will be live at `https://your-project.vercel.app`

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add your custom domain
   - Update DNS records as instructed

### 🌐 Option 2: Netlify (Alternative - Free)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up
   - Drag and drop your `dist` folder to deploy
   - Or connect to GitHub for automatic deployments

### 💾 Option 3: Traditional Web Hosting

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Use FTP/SFTP to upload the `dist` folder contents
   - Point your domain to the web root directory

## Post-Deployment

### 📊 Analytics (Optional)
Add Google Analytics to track visitors:
1. Create a Google Analytics account
2. Get your tracking ID
3. Add to `client/index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### 🔍 SEO Improvements
1. **Submit to Google:**
   - Add your site to [Google Search Console](https://search.google.com/search-console)
   - Submit your sitemap

2. **Local SEO:**
   - Create Google My Business listing
   - Add your website URL to the listing

### 📱 Social Media Integration
1. **Test social sharing:**
   - Share your website URL on Facebook/WhatsApp
   - Verify the preview looks good

2. **WhatsApp Business:**
   - Set up WhatsApp Business account
   - Create quick reply messages for common inquiries

## Maintenance

### 🔄 Regular Updates
- Update images seasonally (new class photos, events)
- Add new testimonials to `client/src/components/Results.tsx`
- Update course offerings in `client/src/components/Courses.tsx`

### 📈 Performance Monitoring
- Use Google PageSpeed Insights to check loading speed
- Monitor form submissions in browser developer tools

## Troubleshooting

### Common Issues:
1. **Images not loading:** Check image URLs in config files
2. **WhatsApp not working:** Verify phone number format in contacts config
3. **Contact form errors:** Check browser console for validation errors

### Getting Help:
- Check browser developer console for errors
- Review deployment logs in Vercel/Netlify dashboard
- Test on different devices and browsers

---

🎉 **Congratulations!** Your Genius Classes website is now ready for the world!