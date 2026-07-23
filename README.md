# Snow Learning Solutions Website

A modern, responsive website for Snow Learning Solutions - an enterprise learning consulting firm.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful animations with Framer Motion
- 📱 Mobile-first approach
- ⚡ Built with Next.js and Tailwind CSS
- 🎯 SEO optimized
- 📊 Component-based architecture

## Pages

- **Home** - Hero section with services overview and case studies
- **About** - Company background, expertise, and philosophy
- **Services** - Detailed service offerings and capabilities
- **Portfolio** - Case studies, industries served, and testimonials
- **Process** - Our proven consulting methodology
- **Contact** - Contact form and information
- **Privacy** - Privacy policy

## Components

### Layout Components
- Navigation - Sticky header with mobile menu
- Footer - Company info, links, and contact details

### Section Components
- Hero - Main landing hero section
- Services - Service cards and offerings
- Process - 5-step process timeline
- CaseStudies - Portfolio of completed projects
- Testimonials - Client testimonials and reviews
- Industries - Industries served
- WhyChooseUs - Key differentiators
- Experience - Company expertise highlights
- Expertise - Comprehensive skill set
- Philosophy - Company values and approach

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Color Scheme

- **Navy**: #001f3f (primary)
- **Navy Light**: #003d5c
- **Navy Dark**: #000d1f
- **Accent**: #00d4ff (cyan)
- **Slate**: #64748b (text)

## Project Structure

```
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── process/
│   ├── contact/
│   └── privacy/
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Process.tsx
│       ├── CaseStudies.tsx
│       ├── Testimonials.tsx
│       ├── Industries.tsx
│       ├── WhyChooseUs.tsx
│       ├── Experience.tsx
│       ├── Expertise.tsx
│       ├── Philosophy.tsx
│       ├── AboutHero.tsx
│       ├── ServicesHero.tsx
│       ├── PortfolioHero.tsx
│       ├── ProcessHero.tsx
│       ├── ContactHero.tsx
│       └── ContactForm.tsx
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## License

MIT
