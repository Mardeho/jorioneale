# Jori O'Neale - AI Strategist & Talk Your Book Creator

A professional, modern personal brand website showcasing Jori O'Neale's expertise as an AI strategist, TEDx speaker, and creator of the Talk Your Book™ framework. Built with HTML, CSS, and JavaScript for GitHub Pages hosting.

## About This Site

This is **Jori's personal brand website** focused on:
- **Talk Your Book™ Intensive** ($1,500) - The signature 1-hour framework session
- **AI Strategy Consulting** - Custom packages for organizations and professionals
- **Speaking & Training** - TEDx-level keynotes and workshops

### Strategic Links to Other Companies:
- **The 1 and Only Publishing** (the1andonlypublishing.com) - Full-service publishing, ghostwriting starting at $5,250
- **CLEAR Youth Project** (clearyouthproject.com) - Training and development programs
- **IYH Innertainment** (iyhinnertainment.com) - Event hosting and production services

## Features

- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Design**: Clean, professional aesthetic with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Minimal dependencies, optimized for performance
- **Easy to Update**: Simple HTML structure for quick content updates
- **No Platform Lock-in**: You own 100% of the code

## What's Included

- `index.html` - Main homepage with all sections
- `styles.css` - Complete styling with responsive design
- `script.js` - Interactive features and smooth scrolling
- `README.md` - This file with deployment instructions

## Quick Start - Deploy to GitHub Pages

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to https://github.com
2. Sign up for a free account
3. Verify your email address

### Step 2: Create a New Repository
1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name it: `jorioneale-website` (or any name you prefer)
4. Make it **Public**
5. Click "Create repository"

### Step 3: Upload Your Website Files
There are two ways to do this:

#### Option A: Upload via GitHub Web Interface (Easiest)
1. On your repository page, click "Add file" → "Upload files"
2. Drag and drop these files:
   - index.html
   - styles.css
   - script.js
   - README.md
3. Scroll down and click "Commit changes"

#### Option B: Use GitHub Desktop (Recommended for future updates)
1. Download GitHub Desktop from https://desktop.github.com
2. Clone your repository
3. Copy all website files into the local folder
4. Commit and push changes

### Step 4: Enable GitHub Pages
1. Go to your repository Settings
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at: `https://[your-username].github.io/jorioneale-website/`

### Step 5: Connect Your Custom Domain (jorioneale.com)
1. In GitHub Pages settings, add your custom domain: `jorioneale.com`
2. Check "Enforce HTTPS"
3. In your domain registrar (where you bought jorioneale.com):
   - Add a CNAME record pointing to: `[your-username].github.io`
   - Or add these A records:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
4. Wait 24-48 hours for DNS propagation

## Customization Guide

### Update Your Information

#### 1. Service Pricing
Current pricing in the site:
- **Talk Your Book Intensive**: $1,500 (line ~250 in index.html)
- **AI Strategy Consulting**: Custom packages
- **Speaking & Training**: Custom quote

To update prices, search for "service-price" in index.html

#### 2. Company Links
Make sure these URLs are correct (around line ~430):
- The 1 and Only Publishing: https://the1andonlypublishing.com
- CLEAR Youth Project: https://clearyouthproject.com
- IYH Innertainment: https://iyhinnertainment.com

#### 3. Contact Information & Booking
- Replace `mailto:jori@jorioneale.com` with your actual email
- Add your calendar booking link (Calendly, Acuity, etc.) to replace the email links for the coffee chat booking

#### 4. Email Opt-in Form
The newsletter form (line ~450) needs to be connected to your email service:
- **ConvertKit**: Add your form action URL
- **MailChimp**: Add your form action URL  
- **ActiveCampaign**: Add your form action URL

Example:
```html
<form action="https://your-email-service.com/subscribe" method="POST">
```
- Replace the placeholder in the About section (line ~380 in index.html)
- Add your image file to the repository
- Update the HTML:
```html
<div class="about-image">
    <img src="your-photo.jpg" alt="Jori O'Neale" style="width: 100%; border-radius: 10px;">
</div>
```

#### 3. Add Social Media Links
Update the social links section (around line 460) with your actual URLs:
```html
<div class="social-icons">
    <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn">LinkedIn</a>
    <a href="https://instagram.com/yourhandle" aria-label="Instagram">Instagram</a>
    <a href="https://facebook.com/yourpage" aria-label="Facebook">Facebook</a>
</div>
```

#### 4. Update Service Prices
Modify the pricing in the Services section as needed

#### 5. Add Booking/Calendar Links
Replace `#contact` with actual scheduling links (Calendly, Acuity, etc.)

### Color Customization

Want to change the colors? Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #2D3748;      /* Main dark color */
    --secondary-color: #D4A574;     /* Gold/accent color */
    --accent-color: #1A365D;        /* Deep blue */
}
```

### Adding New Sections

To add a new section:
1. Copy an existing section structure from `index.html`
2. Modify the content
3. Add corresponding styles in `styles.css` if needed

## Content To-Do List

Before launching, make sure to:

- [ ] Add your professional headshot (About section)
- [ ] Update contact email or add calendar booking link
- [ ] Connect email opt-in form to your email service provider
- [ ] Add your actual social media links (LinkedIn, Instagram, Facebook, YouTube)
- [ ] Verify all three company website URLs are correct
- [ ] Add actual TEDx video embed (when available)
- [ ] Test the 15-minute coffee chat booking flow
- [ ] Set up Google Analytics or your preferred analytics
- [ ] Add any client book covers/portfolio pieces you want to showcase

## Key Sections Explained

**Hero**: Positions you as AI strategist with Talk Your Book framework
**Authority**: Establishes your 3+ years of AI innovation and credentials
**Audience Cards**: Three pathways - Talk Your Book, AI Strategy, Speaking
**Services**: Focus on $1,500 intensive, AI consulting, and speaking
**Companies Section**: Strategic links to your three other businesses
**Opt-in**: Lead capture for free guide in exchange for email
**Contact**: Primary CTA is 15-minute coffee chat

## Maintenance

### Making Updates
1. Edit the files locally or on GitHub
2. Commit changes
3. Push to GitHub
4. Changes appear live within a few minutes

### Adding a Blog
Consider adding a `/blog` folder with individual HTML pages for blog posts, or integrate a platform like:
- Medium (embed)
- Substack (link)
- Jekyll (GitHub Pages native support)

### Adding Forms
GitHub Pages doesn't support backend forms, so use:
- Google Forms (free)
- Typeform (more professional)
- Formspree (developer-friendly)
- Basin (made for static sites)

## Troubleshooting

**Site not loading?**
- Check that files are in the root directory (not in a subfolder)
- Verify GitHub Pages is enabled in Settings
- Wait a few minutes for deployment

**Custom domain not working?**
- Verify DNS settings with your domain registrar
- Wait 24-48 hours for propagation
- Check GitHub Pages settings show a green checkmark

**Styling looks broken?**
- Make sure `styles.css` is in the same folder as `index.html`
- Check browser console for errors (F12)

## Future Enhancements

Consider adding:
- **Blog section** for thought leadership content
- **Podcast embed** for "Thirty Minutes of Power"
- **Portfolio page** showing completed books
- **Testimonials video** compilation
- **Email newsletter signup** with lead magnet
- **Free chapter download** with email capture
- **Live chat widget** (Tawk.to, Intercom)
- **Analytics** (Google Analytics, Plausible)

## Technical Details

- **No frameworks required** - Pure HTML/CSS/JS
- **Mobile-first design** - Optimized for all devices
- **Cross-browser compatible** - Works on all modern browsers
- **Accessible** - Follows WCAG guidelines
- **Fast loading** - Under 100KB total size
- **SEO ready** - Proper semantic markup

## Support

If you need help:
1. Check GitHub Pages documentation: https://pages.github.com
2. GitHub Community: https://github.community
3. Feel free to reach out for technical assistance

## License

This website code is yours to use, modify, and deploy as you wish. All content and branding belongs to Jori O'Neale.

---

**Built with intention. Owned completely. No hostages. 🚀**
