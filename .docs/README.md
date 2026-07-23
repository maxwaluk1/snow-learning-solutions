# Snow Learning Solutions

Enterprise learning solutions website built with Next.js, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
snow-learning-solutions/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── services/page.tsx        # Services page
│   ├── portfolio/page.tsx       # Portfolio page
│   ├── process/page.tsx         # Process page
│   ├── contact/page.tsx         # Contact page
│   └── privacy/page.tsx         # Privacy policy page
│
├── components/                   # React components
│   ├── Navigation.tsx           # Navigation header
│   ├── Footer.tsx              # Footer
│   └── sections/               # Page sections
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
│
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Project dependencies
```

## Pages

### Home (`/`)
- Hero section with main value proposition
- Services overview
- Process highlight
- Case studies preview
- Call-to-action

### About (`/about`)
- Company hero section
- Experience overview
- Expertise showcase
- Company philosophy
- Why choose us section
- Call-to-action

### Services (`/services`)
- Services hero
- Detailed service offerings (4 main services)
- Expertise areas
- Call-to-action

### Portfolio (`/portfolio`)
- Portfolio hero
- Case studies (4 detailed case studies)
- Industries served
- Testimonials from clients
- Call-to-action

### Process (`/process`)
- Process hero
- 5-step methodology timeline
- Call-to-action

### Contact (`/contact`)
- Contact hero
- Contact form with email, phone, location
- Message submission form

### Privacy (`/privacy`)
- Privacy policy information
- Data collection and usage
- Legal information

## Features

✨ **Modern Design**
- Clean, professional aesthetic
- Navy and cyan color scheme
- Responsive grid layouts

🎨 **Animations**
- Smooth scroll animations with Framer Motion
- Staggered element animations
- Hover effects and transitions

📱 **Responsive**
- Mobile-first design approach
- Optimized for all screen sizes
- Touch-friendly navigation

🚀 **Performance**
- Next.js for optimized builds
- Image optimization
- Code splitting
- SEO optimized

🔧 **Developer Experience**
- TypeScript for type safety
- Tailwind CSS for rapid styling
- Component-based architecture
- Clean, maintainable code

## Components

### Navigation
- Sticky header that stays on top while scrolling
- Desktop navigation menu
- Mobile hamburger menu
- Responsive design

### Footer
- Company information
- Quick links
- Contact information with icons
- Social media links
- Copyright and legal links

### Section Components

**Hero** - Large hero section with animated background, benefits list, and CTAs

**Services** - Grid of service cards with icons and descriptions

**Process** - Timeline visualization of 5-step methodology

**CaseStudies** - Portfolio cards with results and metrics

**Testimonials** - Client testimonial cards with star ratings

**Industries** - Grid of industries served with emoji icons

**WhyChooseUs** - Reasons to choose company with icon cards

**Experience** - Company experience highlights

**Expertise** - Grid of skill/expertise areas

**Philosophy** - Company values and approach

## Color Palette

- **Primary Navy**: `#001f3f`
- **Navy Light**: `#003d5c`
- **Navy Dark**: `#000d1f`
- **Accent Cyan**: `#00d4ff`
- **Slate Gray**: `#64748b`
- **Slate Light**: `#cbd5e1`

## Typography

- **Font Family**: Inter (from Google Fonts)
- **Display XL**: 3.75rem (60px)
- **Display LG**: 3rem (48px)
- **Display MD**: 2.25rem (36px)
- **Heading LG**: 1.875rem (30px)
- **Heading MD**: 1.5rem (24px)
- **Heading SM**: 1.25rem (20px)

## Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Animation**: [Framer Motion](https://www.framer.com/motion/) - Animation library
- **Icons**: [Lucide React](https://lucide.dev/) - Icon library
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Build**: [Vite](https://vitejs.dev/) - Next-generation build tool
- **Package Manager**: npm or yarn

## Development

### Available Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

### Code Style

- Prettier for code formatting
- ESLint for code quality
- TypeScript for type safety

## Deployment

The project is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS**
- **DigitalOcean**
- **Self-hosted servers**

### Vercel Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically builds and deploys on push
4. Custom domain configuration in Vercel dashboard

## Environment Variables

Create a `.env.local` file for development:

```env
# Add any required environment variables here
```

## Performance Optimization

- Images are optimized with Next.js Image component
- CSS is minified and optimized with Tailwind
- JavaScript is code-split per route
- Static site generation where possible
- SEO optimized with metadata

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

- Blog section with articles
- Client testimonials management system
- Newsletter subscription
- Learning resources library
- Team member profiles
- Advanced contact form validation
- Analytics integration
- Dark mode theme

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please contact:
- Email: info@snowlearningsolutions.com
- Phone: +1 (234) 567-890

## Authors

Snow Learning Solutions Team

---

**Built with ❤️ by the Snow Learning Solutions team**
