import { BlogPost } from '../components/BlogPost';
import { posts } from '../data/posts';

export function Blog() {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Blog</h1>
        <p>Thoughts, ideas, and tutorials</p>
      </header>
      <main className="blog-posts">
        {posts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </main>
    </div>
  );
}
