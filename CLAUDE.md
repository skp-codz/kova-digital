# Kova Digital Website

## Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** DM Sans (via `next/font/google`)
- **Deploy:** Vercel

## Brand Colors
- Background: `#0a0a0b`
- Surface: `#111113`
- Accent: `#3B82F6`
- Text: `#ededed` (foreground)

## Fonts
- Primary: DM Sans (loaded via `next/font/google` in `app/layout.tsx`)

## Component Conventions
- Pages live in `app/<route>/page.tsx`
- Shared components live in `app/components/`
- All pages use server components by default; add `"use client"` only when needed (e.g., Contact form)
- Page transitions use the `.animate-fade-in-up` CSS class defined in `globals.css`
- Colors reference CSS custom properties via Tailwind theme tokens: `bg-background`, `bg-surface`, `text-accent`, etc.

## Pages
1. **Home** (`/`) — Hero, stats bar, featured work grid
2. **Services** (`/services`) — 6 service cards in 3-col grid
3. **Work** (`/work`) — 4 portfolio cards in 2-col grid
4. **About** (`/about`) — Studio bio, metrics, 4-step process
5. **Contact** (`/contact`) — 3 channel cards + mailto contact form

## Contact
- Email: hello@kova-digital.com
- Domain: kova-digital.com
