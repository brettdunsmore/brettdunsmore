# Brett Dunsmore Portfolio

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/brettdunsmore/brettdunsmore)

## Overview

A modern, full-stack portfolio website for Brett Dunsmore, built with React, TypeScript, and Cloudflare Workers. This project features a responsive frontend with shadcn/ui components, Tailwind CSS styling, and a powerful API backend powered by Hono on Cloudflare Workers. It's optimized for performance, SEO, and seamless deployment to Cloudflare.

## Features

- **Responsive Design**: Mobile-first layout with Tailwind CSS and shadcn/ui components.
- **Theme Support**: Light/dark mode toggle with persistence.
- **API Routes**: Secure, CORS-enabled endpoints using Hono framework.
- **Error Handling**: Client and server-side error reporting with TanStack Query.
- **State Management**: React Query for data fetching and Zustand/Immer for local state.
- **Animations & UI**: Framer Motion, Tailwind animations, and glassmorphism effects.
- **Sidebar Layout**: Collapsible sidebar with navigation (customizable).
- **TypeScript Everywhere**: Full type safety including Cloudflare Workers bindings.
- **Development Tools**: Vite for fast HMR, Bun for package management.

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Lucide Icons, Framer Motion |
| **Backend** | Cloudflare Workers, Hono, TypeScript |
| **State & Data** | TanStack React Query, Zustand, Immer, React Hook Form, Zod |
| **UI Components** | Radix UI, Headless UI, Sonner (Toasts), Recharts |
| **Utilities** | clsx, tailwind-merge, date-fns, UUID |
| **Dev Tools** | Bun, ESLint, Wrangler, Cloudflare Vite Plugin |

## Prerequisites

- [Bun](https://bun.sh/) (package manager)
- [Cloudflare Account](https://dash.cloudflare.com/) and [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/) installed (`bunx wrangler@latest login`)
- Node.js (for some dev deps, but Bun handles everything)

## Quick Start

1. **Clone the repository**:
   ```
   git clone <your-repo-url>
   cd brett-dunsmore-portf-bb5tyzzqf1j07fs1zq92o
   ```

2. **Install dependencies**:
   ```
   bun install
   ```

3. **Run in development**:
   ```
   bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or your configured port).

## Development

- **Start dev server**: `bun dev` (frontend + hot reload).
- **Type generation**: `bun cf-typegen` (Cloudflare bindings).
- **Linting**: `bun lint`.
- **Preview production build**: `bun preview`.
- **Add API routes**: Edit `worker/userRoutes.ts` (do not modify `worker/index.ts`).
- **Frontend routing**: Use React Router in `src/main.tsx`.
- **Custom UI**: Leverage shadcn/ui components from `@/components/ui/*`.

**Folder Structure**:
```
src/          # React app (pages, components, hooks)
worker/       # Cloudflare Workers API
shared/       # (Optional) Shared TS types
```

## Building for Production

```
bun build
```

Outputs to `dist/` for Cloudflare deployment.

## Deployment

Deploy to Cloudflare Workers/Pages with zero-config:

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/brettdunsmore/brettdunsmore)

1. **Login to Cloudflare**:
   ```
   bunx wrangler@latest login
   ```

2. **Deploy**:
   ```
   bun deploy
   ```
   (Runs `bun build && wrangler deploy` automatically.)

**Custom Domain**: Update `wrangler.jsonc` and run `wrangler deploy`.

**CI/CD**: Use GitHub Actions or Cloudflare Git integration.

## Customization

- **API**: Add routes in `worker/userRoutes.ts`.
- **Theme**: Edit `src/index.css` and `tailwind.config.js`.
- **Sidebar**: Modify `src/components/app-sidebar.tsx` or remove from layout.
- **Home Page**: Replace `src/pages/HomePage.tsx`.
- **Error Reporting**: Client errors auto-report to `/api/client-errors`.

## Scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Development server |
| `bun build` | Production build |
| `bun lint` | Lint code |
| `bun preview` | Local production preview |
| `bun deploy` | Build & deploy to Cloudflare |
| `bun cf-typegen` | Generate Worker types |

## Contributing

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit changes (`git commit -m 'Add some AmazingFeature'`).
4. Push and open a PR.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

Built with ❤️ for Cloudflare Developers.