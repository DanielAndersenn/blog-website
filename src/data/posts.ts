export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and how to build your first component.',
    content: `React is a powerful JavaScript library for building user interfaces. In this post, we'll explore the fundamentals of React and help you build your first component.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".

## Creating Your First Component

Components are the building blocks of any React application. Here's a simple example:

\`\`\`jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
\`\`\`

## Key Concepts

- **JSX**: A syntax extension that lets you write HTML-like code in JavaScript
- **Props**: How you pass data from parent to child components
- **State**: How components manage and update their own data

React's component-based architecture makes it easy to build and maintain complex applications. Start small, and gradually build up your understanding of these concepts.`,
    date: '2024-01-15',
    author: 'Jane Doe',
  },
  {
    id: 2,
    title: 'TypeScript Best Practices',
    excerpt: 'Explore the best practices for writing clean and maintainable TypeScript code.',
    content: `TypeScript adds static typing to JavaScript, helping you catch errors early and write more maintainable code. Let's explore some best practices.

## Why TypeScript?

TypeScript provides optional static typing, classes, and interfaces. It helps you write more robust code by catching errors at compile time rather than runtime.

## Best Practices

### 1. Use Strict Mode

Always enable strict mode in your tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

### 2. Prefer Interfaces for Object Types

Interfaces are more extensible and provide better error messages:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}
\`\`\`

### 3. Avoid \`any\`

The \`any\` type defeats the purpose of TypeScript. Use \`unknown\` if you need a type-safe alternative.

### 4. Use Type Inference

Let TypeScript infer types when possible - it's often more maintainable than explicit annotations everywhere.

Following these practices will help you write cleaner, more maintainable TypeScript code.`,
    date: '2024-01-10',
    author: 'John Smith',
  },
  {
    id: 3,
    title: 'Building a Blog with Vite',
    excerpt: 'A step-by-step guide to creating a modern blog using Vite and React.',
    content: `Vite is a modern build tool that provides an extremely fast development experience. In this guide, we'll walk through building a blog with Vite and React.

## Why Vite?

Vite offers several advantages over traditional bundlers:

- **Instant Server Start**: No bundling required during development
- **Lightning Fast HMR**: Updates reflect in milliseconds
- **Optimized Build**: Uses Rollup for production builds

## Getting Started

Create a new Vite project with React and TypeScript:

\`\`\`bash
npm create vite@latest my-blog -- --template react-ts
cd my-blog
npm install
npm run dev
\`\`\`

## Project Structure

A typical Vite + React project structure:

\`\`\`
src/
├── components/
├── pages/
├── App.tsx
└── main.tsx
\`\`\`

## Adding Features

From here, you can add routing with React Router, styling with CSS or a UI library, and connect to a CMS or API for your blog content.

Vite's speed and simplicity make it an excellent choice for modern React applications.`,
    date: '2024-01-05',
    author: 'Jane Doe',
  },
];

export function getPostById(id: number): Post | undefined {
  return posts.find((post) => post.id === id);
}
