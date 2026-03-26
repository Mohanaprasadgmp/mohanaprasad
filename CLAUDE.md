# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm run lint      # ESLint check
npm run start     # Run production server
```

No test suite is configured.

## Architecture

Single-page portfolio built with **Next.js 16 App Router**. All content lives in `lib/data.ts` — edit there first before touching components.

### Data Flow
`lib/data.ts` → section components → `app/page.tsx` (assembles all sections in order)

### Sections (render order in `app/page.tsx`)
Navbar → Hero → About → Skills → Projects → Experience → Certifications → Blog → Contact → Footer

Each section is a self-contained component in `components/`. They import typed data directly from `lib/data.ts`.

### Contact Form
`components/Contact.tsx` → `POST /api/contact` (`app/api/contact/route.ts`) → Resend API

Requires `RESEND_API_KEY` in `.env.local`. Currently sends from `onboarding@resend.dev`.

### Styling Conventions
- Dark mode default via `next-themes` with `attribute="class"` in `app/layout.tsx`
- Glassmorphism pattern: `bg-white/5 backdrop-blur-sm border border-white/10`
- Gradient accents: violet (`#7c3aed` / `violet-500`) + cyan (`#06b6d4` / `cyan-400`)
- Background: dark slate `#0a0a0f`
- Custom `blob` and `float` animations defined in `tailwind.config.js` and keyframes in `app/globals.css`

### react-icons v5 Gotchas
- `SiAmazonwebservices` does NOT exist → use `FaAws` from `react-icons/fa`
- `SiLinkedin` does NOT exist → use `FaLinkedin` from `react-icons/fa`
- `SiGithub`, `SiMedium`, `SiVercel`, `SiLinux`, `SiFigma`, `SiX` all exist in `react-icons/si`

### Path Alias
`@/` maps to the project root (e.g., `@/lib/data`, `@/components/Hero`).
