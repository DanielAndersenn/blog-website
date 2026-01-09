import { useParams, Link } from 'react-router-dom';
import { getPostById } from '../data/posts';

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPostById(Number(id)) : undefined;

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-not-found">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/" className="back-link">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <Link to="/" className="back-link">← Back to Blog</Link>
      <article className="blog-post-full">
        <header className="blog-post-full-header">
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-date">{post.date}</span>
            <span className="blog-post-author">by {post.author}</span>
          </div>
        </header>
        <div className="blog-post-content">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={index}>{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('```')) {
              const lines = paragraph.split('\n');
              const code = lines.slice(1, -1).join('\n');
              return <pre key={index}><code>{code}</code></pre>;
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </article>
    </div>
  );
}
