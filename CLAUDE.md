# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (Vite, runs on localhost:5173)
- `npm run build` - Type-check with TypeScript and build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── BlogPost.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   └── ThemeToggle.tsx
├── data/             # Static data
│   └── posts.ts
├── hooks/            # Custom React hooks
│   └── useThemePreference.ts
├── pages/            # Page components
│   ├── Blog.tsx
│   ├── BlogPostPage.tsx
│   └── Dev.tsx
├── App.tsx           # Root component with routing
├── App.css           # Component and page styles
├── index.css         # Global styles and CSS reset
└── main.tsx          # Application entry point
```

## Architecture

This is a React + TypeScript blog website built with Vite.

**Routing**: React Router v7 with BrowserRouter. Routes are defined in `src/App.tsx`:
- `/` - Blog page (displays blog posts)
- `/blog/:id` - Individual blog post page
- `/dev` - Component development workspace (for inspecting and testing UI components)

**Styling**: Plain CSS with dark/light mode support via `data-theme` attribute on the document element. Component styles use BEM-like naming (e.g., `.blog-post-title`, `.btn-primary`).

**Dev Page**: The `/dev` route serves as a component showcase/playground for developing and testing UI components in isolation.
