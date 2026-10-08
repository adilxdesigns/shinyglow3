# 🌿 Shiny Glow Academy & Shiny Plush Salon Website

A modern, mobile-first, SEO-optimised web application built for **Shiny Glow Academy** (primary beauty & makeup academy) and **Shiny Plush** (secondary beauty salon) located in Perambur, Chennai, Tamil Nadu, India.

---

## ✨ Features & Highlights

- **Academy First Architecture**: Main focus on courses, weekend masterclasses, certification, and admissions.
- **Shiny Plush Salon Section**: Integrated secondary showcase for salon treatments and booking.
- **Enquire Now WhatsApp Flow**: Seamless 1-click modal with 10-digit Indian mobile validation redirecting to prefilled WhatsApp text.
- **Mobile-First UX**: Sticky header, hamburger drawer, and sticky bottom bar with "Call" (`tel:+919941222294`) & "WhatsApp" buttons.
- **Local SEO Optimized**: Pre-configured meta tags, canonical URLs, OpenGraph headers, and JSON-LD schemas (`EducationalOrganization`, `BeautySalon`, `Course`, `FAQPage`) targeting Perambur & Chennai keywords.
- **Centralized Data File**: All content, course lists, weekend workshops, timings, FAQs, and contact parameters are managed in one single file (`/src/data/siteData.js`).
- **GitHub Pages Ready**: Configured with `HashRouter`, base path settings, and `gh-pages` deployment scripts.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Routing**: `react-router-dom` (HashRouter for GitHub Pages compatibility)
- **Styling**: Tailwind CSS v3 with custom soft sage color system (`#7FA58A`, `#E8F1EA`, `#2C4837`) & Google Fonts (`Playfair Display` serif, `Poppins` sans).
- **Animations**: `framer-motion` for scroll reveals, mobile drawer, and modal transitions.
- **Icons**: `lucide-react` icon set.
- **SEO**: `react-helmet-async` for per-page title, meta descriptions, and JSON-LD schemas.

---

## 🚀 Quick Start & Local Setup

### 1. Installation
Clone the repository and install dependencies:

```bash
# Navigate to project directory
cd shinyglowweb

# Install dependencies
npm install
```

### 2. Run Locally
Start the Vite development server:

```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the live website.

### 3. Build for Production
To test the production build locally:

```bash
npm run build
npm run preview
```

---

## 📝 Content Editing Guide

All website text, phone numbers, courses, workshops, timings, FAQs, and social links are centralized in:

📂 `src/data/siteData.js`

### How to update details:
1. **Change Phone / WhatsApp Number**: Update `contact.phoneFormatted`, `contact.phoneRaw`, and `contact.whatsappNumber` in `siteData.js`.
2. **Update Courses or Syllabi**: Modify the `courses` array inside `siteData.js`.
3. **Add / Edit Weekend Workshops**: Modify the `workshops` array inside `siteData.js`.
4. **Update Timings or Address**: Modify the `contact.timings` or `contact.address` object inside `siteData.js`.
5. **Update Instagram Handles**: Modify the `socials` object inside `siteData.js`.

---

## 🖼️ How to Swap Placeholder Images

Placeholder graphics are handled gracefully via `<PlaceholderImage />`. To replace them with real studio photos:

1. Add your `.jpg` or `.webp` image files inside `src/assets/`.
2. Import the image in your component/page file:
   ```javascript
   import heroPhoto from '../assets/hero-classroom.jpg';
   ```
3. Replace `<PlaceholderImage ... />` with a standard `<img>` tag:
   ```html
   <img 
     src={heroPhoto} 
     alt="Shiny Glow Academy Classroom Practicals in Perambur" 
     loading="lazy" 
     className="w-full h-[350px] object-cover rounded-2xl shadow-card"
   />
   ```

---

## 🌐 GitHub Pages Deployment Guide

This project is pre-configured for GitHub Pages deployment using the `gh-pages` package.

### Step-by-Step Instructions:

1. **Verify `vite.config.js`**:
   Ensure `base: './'` is set (already configured).

2. **Add Homepage in `package.json`**:
   Update the `"homepage"` field in `package.json` with your GitHub username and repository name:
   ```json
   "homepage": "https://<your-github-username>.github.io/<repository-name>"
   ```

3. **Deploy with 1 Command**:
   Run the deploy script:
   ```bash
   npm run deploy
   ```
   *This command will automatically run `npm run build` and push the `dist/` folder to the `gh-pages` branch.*

4. **Enable GitHub Pages in Repository Settings**:
   - Go to your GitHub repository -> **Settings** -> **Pages**.
   - Under **Build and deployment**, select `Deploy from a branch`.
   - Set Branch to `gh-pages` / `/(root)`.
   - Click **Save**. Your site will be live within 2-3 minutes!

---

## 🎯 Google Business Profile & Search Console Checklist

To rank #1 on Google for *"beauty academy in Perambur"* and *"makeup course in Perambur"*:

### 1. Google Business Profile (GBP)
- [ ] Create/claim **Shiny Glow Academy** on [Google Business Profile](https://business.google.com/).
- [ ] Set primary category to **Beauty School** or **Cosmetology School**.
- [ ] Set secondary category to **Beauty Salon** (for Shiny Plush).
- [ ] Set address to **Perambur, Chennai, Tamil Nadu**.
- [ ] Set business phone to **+91 99412 22294**.
- [ ] Link website URL: `https://<your-username>.github.io/<repo>/` or custom domain.
- [ ] Add working hours: **Mon-Fri 11 AM - 5 PM** (Courses), **Sat-Sun 11 AM - 5 PM** (Workshops).
- [ ] Upload high quality photos of classroom practicals, student certificates, and salon interior.

### 2. Google Search Console (GSC)
- [ ] Register your domain/URL in [Google Search Console](https://search.google.com/search-console).
- [ ] Submit your sitemap URL: `https://<your-domain>/sitemap.xml`.
- [ ] Request indexing for the homepage and `/courses` route.

---

## 📄 License & Attribution

Designed and developed for **Shiny Glow Academy** & **Shiny Plush Salon**, Perambur, Chennai.
