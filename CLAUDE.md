# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (Vite, runs on localhost:5173)
- `npm run build` - Type-check with TypeScript and build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Architecture

This is a React + TypeScript blog website built with Vite.

**Routing**: React Router v7 with BrowserRouter. Routes are defined in `src/App.tsx`:
- `/` - Blog page (displays blog posts)
- `/dev` - Component development workspace (for inspecting and testing UI components)

**Structure**:
- `src/pages/` - Page components (Blog, Dev)
- `src/components/` - Reusable UI components (BlogPost, Button, Card)
- `src/App.css` - All component and page styles (single stylesheet approach)
- `src/index.css` - Global styles and CSS reset

**Styling**: Plain CSS with dark/light mode support via `prefers-color-scheme` media queries. Component styles use BEM-like naming (e.g., `.blog-post-title`, `.btn-primary`).

**Dev Page**: The `/dev` route serves as a component showcase/playground for developing and testing UI components in isolation.
