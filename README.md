# Digitech Search Labs - Agency Website

Ultra-fast, modern single-page website for Digitech Search Labs built with **Vite**, **React**, and **Tailwind CSS**.

## 🚀 Features

- **Maximum Performance**: Optimized for 95+ Mobile PageSpeed / Core Web Vitals
- **Responsive Design**: Full mobile/tablet/desktop support with smooth scrolling
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Schema.org JSON-LD**: LocalBusiness / ProfessionalService structured data
- **Fast Build**: Vite-powered development with HMR (Hot Module Replacement)
- **Production Ready**: Minified assets, optimized images, CDN-ready

## 📁 Project Structure

```
digitech-search-labs/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation bar with mobile menu
│   │   ├── Hero.jsx             # Hero section with CTAs
│   │   ├── EngineeringAdvantage.jsx  # Comparison grid
│   │   ├── Disciplines.jsx      # 4 core service cards
│   │   ├── CaseStudy.jsx        # Live case study
│   │   ├── AuditForm.jsx        # Audit request form + contact sidebar
│   │   ├── FloatingWhatsApp.jsx # Fixed WhatsApp widget
│   │   └── JsonLd.jsx           # Schema.org structured data
│   ├── styles/
│   │   └── index.css            # Tailwind + custom styles
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # React root
├── index.html                   # HTML entry point with SEO meta
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind design tokens
├── postcss.config.js           # PostCSS plugins
├── package.json                # Dependencies
└── .gitignore                  # Git ignore rules
```

## 🛠 Installation & Setup

### Prerequisites

- Node.js 16+
- npm 8+

### Install Dependencies

```bash
cd ~/Projects/digitech-search-labs
npm install
```

### Development Server

Start the dev server with hot reload:

```bash
npm run dev
```

This opens `http://localhost:3000` in your browser.

### Production Build

Build optimized assets:

```bash
npm run build
```

Output goes to `dist/` directory.

### Preview Production Build

Serve the production build locally:

```bash
npm run preview
```

## 🎨 Design System

### Colors

- **Deep Slate/Navy**: `#0F172A` (background, cards)
- **Crimson Red**: `#DC2626` (CTAs, accents, highlights)
- **White**: Text and card content
- **Slate Gray**: Secondary text

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, responsive sizes (h1: 4xl → 6xl)
- **Body**: Regular 16/18/20px with leading

### Components

- **Buttons**: `.btn-primary`, `.btn-secondary` (Tailwind components)
- **Cards**: `.card` (with hover effects)
- **Badges**: `.badge` (crimson background with icon)
- **Sections**: `.section-container` (max-width, responsive padding)

## 🔗 Key Sections

### 1. Header / Navbar
- Sticky navigation with desktop and mobile views
- Logo + subtitle
- Navigation links + "Request Audit" CTA
- Smooth scroll to form on click

### 2. Hero Section
- Badge with 24-year heritage
- H1 headline with split crimson text
- Subheadline + trust bar
- Dual CTAs (audit form + WhatsApp)

### 3. Engineering Advantage
- Comparison grid: "Typical Agencies" vs "Digitech Search Labs"
- Check/X icons for visual contrast
- Responsive 2-column layout

### 4. Core Disciplines
- 4 service cards: Technical SEO, Local SEO, GEO, PPC
- Lucide icons in crimson badges
- Hover effects

### 5. Case Study
- Live client: Gupta Homeopathic Clinic
- Challenge → Solution → Outcome breakdown
- 3-column layout with progress indicators

### 6. Audit Request Form
- 5-field form (Name, Business, URL, City, Phone)
- Validation and submission handling
- Success message
- Contact sidebar with phone, email, address, hours
- Responsive 2/3-column grid

### 7. Floating WhatsApp Widget
- Fixed bottom-right corner
- Green WhatsApp button with icon
- Direct link to `https://wa.me/918368889393`

## 📊 Performance Optimizations

- **Code Splitting**: Automatic chunk splitting via Vite
- **Tree Shaking**: Dead code elimination
- **CSS**: Tailwind purges unused styles
- **Images**: Use WebP format with fallbacks
- **Minification**: Terser for JS, Tailwind for CSS
- **Gzip**: Production assets are gzip-compressed

### Build Output Example
```
dist/index.html                   2.49 kB │ gzip:  0.94 kB
dist/assets/index-*.css          17.48 kB │ gzip:  3.76 kB
dist/assets/index-*.js          163.16 kB │ gzip: 51.30 kB
```

## 🔍 SEO & Structured Data

- **Meta Tags**: Title, description, Open Graph, Twitter Card
- **Canonical URL**: Set to production domain
- **JSON-LD Schema**: LocalBusiness + ProfessionalService
- **Structured Data Fields**:
  - Organization name, phone, email
  - Address (Shakarpur, Delhi)
  - Geo coordinates (28.6304, 77.2774)
  - Opening hours (Mon-Sat, 9:30 AM - 7:00 PM)
  - Services (knowsAbout array)
  - Founded: 1997

## 📱 Mobile Responsiveness

All sections are fully responsive:
- **Mobile First**: Base styles for mobile, `md:` breakpoints for tablets/desktop
- **Navigation**: Hamburger menu on mobile (< 768px)
- **Grid Layouts**: 1 column mobile, 2+ columns on larger screens
- **Typography**: Responsive font sizes (`text-base` → `text-lg` → `text-xl`)
- **Spacing**: Scaled padding/margins via Tailwind

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite config
4. Deploys from `dist/` on push

### Traditional Web Host

1. Run `npm run build`
2. Upload `dist/` contents to server
3. Configure server for SPA (route `/` to `index.html`)
4. Set cache headers for assets (static files: 1 year, index.html: no-cache)

### Environment Variables

Create `.env` for API keys (if needed):
```
VITE_API_URL=https://api.example.com
```

## 🛠 Development Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 📝 License

© 2024 Digitech Search Labs. All rights reserved.

---

**Contact**
- Phone/WhatsApp: +91 8368889393
- Email: contact@digitechsearchlabs.com
- Address: 1st Floor, WB-1, Shakarpur, Delhi - 110092
- Hours: Mon–Sat, 9:30 AM – 7:00 PM
