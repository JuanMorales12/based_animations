# Scroll-Based Animations Showcase

A modern, interactive website featuring smooth scroll-based animations built with React, TypeScript, Framer Motion, and GSAP.

## Features

- **Hero Section** - Interactive gradient orbs that follow mouse movement
- **Parallax Scrolling** - Multi-layer parallax effects with depth
- **Fade In Animations** - Elements animate in as you scroll
- **Animated Counters** - Numbers count up when they enter viewport
- **Text Reveal** - Words fade in sequentially on scroll
- **Sticky Scroll** - Content changes while scrolling through sticky section
- **Fully Responsive** - Works beautifully on all devices
- **60fps Performance** - GPU-accelerated animations

## Tech Stack

- React 18
- TypeScript
- Vite
- Framer Motion
- GSAP
- CSS3

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deploy

This project is ready to deploy on:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import repository in Vercel
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify

1. Push your code to GitHub
2. Import repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## Animation Techniques Used

- **useScroll** - Track scroll progress for animations
- **useTransform** - Map scroll values to animation properties
- **useInView** - Trigger animations when elements enter viewport
- **useSpring** - Create smooth, physics-based animations
- **Parallax** - Multi-speed scrolling for depth effect
- **Sticky Positioning** - Elements stick during scroll

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Landing section with mouse-follow effect
│   ├── ParallaxSection.tsx   # Multi-layer parallax scrolling
│   ├── FadeInSection.tsx     # Feature cards with fade-in
│   ├── StatsCounter.tsx      # Animated number counters
│   ├── TextReveal.tsx        # Sequential text reveal
│   ├── StickyScroll.tsx      # Sticky scroll content changes
│   └── Footer.tsx            # Footer section
├── App.tsx                   # Main app component
├── main.tsx                  # Entry point
└── index.css                 # Global styles
```

## License

MIT
