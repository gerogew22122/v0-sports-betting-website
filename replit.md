# Sen.Bets - Sports Betting Tipster Landing Page

## Overview
A Next.js 15 landing page for Sen.Bets, Australia's sports betting tipster service. The site showcases performance statistics, pricing, and testimonials for their betting tips across AFL, NBA, NRL, and Horse Racing.

## Project Structure
```
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main landing page
├── components/             # React components
│   ├── ui/                 # Shadcn UI components
│   └── *.tsx               # Page section components
├── lib/                    # Utility functions
├── public/                 # Static assets
│   └── images/             # Image files
└── styles/                 # Additional styles
```

## Tech Stack
- **Framework**: Next.js 15.2.4 with App Router
- **UI**: React 19, Tailwind CSS 4, Shadcn UI components
- **Charts**: Recharts for performance visualization
- **Language**: TypeScript

## Development
- **Dev Server**: `npm run dev -- -p 5000 -H 0.0.0.0`
- **Build**: `npm run build`
- **Start Production**: `npm run start -- -p 5000 -H 0.0.0.0`

## Configuration Notes
- `next.config.mjs` includes `allowedDevOrigins` for Replit proxy compatibility
- Uses `--legacy-peer-deps` for npm install due to React 19 peer dependency conflicts with some packages
