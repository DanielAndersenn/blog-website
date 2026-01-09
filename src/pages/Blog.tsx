import { BlogPost } from '../components/BlogPost';

const samplePosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and how to build your first component.',
    date: '2024-01-15',
    author: 'Jane Doe',
  },
  {
    id: 2,
    title: 'TypeScript Best Practices',
    excerpt: 'Explore the best practices for writing clean and maintainable TypeScript code.',
    date: '2024-01-10',
    author: 'John Smith',
  },
  {
    id: 3,
    title: 'Building a Blog with Vite',
    excerpt: 'A step-by-step guide to creating a modern blog using Vite and React.',
    date: '2024-01-05',
    author: 'Jane Doe',
  },
];

export function Blog() {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Blog</h1>
        <p>Thoughts, ideas, and tutorials</p>
      </header>
      <main className="blog-posts">
        {samplePosts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </main>
    </div>
  );
}
