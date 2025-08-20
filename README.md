# Genius Classes Website

A professional coaching center website built with React, TypeScript, and Express.js featuring modern UI components and easy content management.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repository-url>
cd genius-classes-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will run on `http://localhost:5000`

## 📝 Content Management

### 🖼️ Updating Images
All images are configured in `client/src/config/images.ts`. Simply update the URLs in this file:

```typescript
export const images = {
  hero: {
    teaching: "YOUR_NEW_IMAGE_URL_HERE",
    alt: "Your alt text here"
  },
  gallery: [
    {
      src: "YOUR_GALLERY_IMAGE_URL_1",
      alt: "Your alt text"
    },
    // Add more gallery images...
  ]
};
```

### 📞 Updating Contact Information & Social Media
All contact details and social links are in `client/src/config/contacts.ts`:

```typescript
export const contactInfo = {
  phone: {
    display: "098679 93532",
    link: "09867993532",
    whatsapp: "919867993532"
  },
  social: {
    facebook: "https://facebook.com/your-page",    // ← Update these!
    instagram: "https://instagram.com/your-page",   // ← Update these!
    youtube: "https://youtube.com/@your-channel",   // ← Update these!
  }
  // ... other contact details
};
```

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── config/        # Configuration files (images, contacts)
│   │   ├── lib/          # Utilities and query client
│   │   └── pages/        # Page components
├── server/                # Backend Express application
├── shared/               # Shared schemas and types
└── README.md            # This file
```

## 🔧 Configuration Files

### Images Configuration (`client/src/config/images.ts`)
- Contains all image URLs used throughout the site
- Easy to update without touching component code
- Includes hero images, gallery images, and Open Graph images

### Contact Configuration (`client/src/config/contacts.ts`)
- Business information (name, tagline)
- Contact details (phone, address, timings)
- Social media links
- Google Maps configuration
- SEO metadata

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy with these settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Deploy to Netlify
1. Push your code to GitHub
2. Connect to Netlify
3. Build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your web server

## 📱 Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Contact Forms**: Integrated inquiry form with validation
- **WhatsApp Integration**: Direct WhatsApp messaging button
- **Google Maps**: Embedded location map
- **SEO Optimized**: Proper meta tags and Open Graph support
- **Fast Loading**: Optimized images and modern build tools

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Tech Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, TypeScript
- **UI Components**: shadcn/ui, Radix UI
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query

## 📞 Support

For technical support or questions about the website, please contact the development team.

---

**© 2024 Genius Classes. All rights reserved.**