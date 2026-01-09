import { Link } from 'react-router-dom';

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

export function BlogPost({ id, title, excerpt, date, author }: BlogPostProps) {
  return (
    <article className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <div className="blog-post-meta">
        <span className="blog-post-date">{date}</span>
        <span className="blog-post-author">by {author}</span>
      </div>
      <p className="blog-post-excerpt">{excerpt}</p>
      <Link to={`/blog/${id}`} className="blog-post-read-more">Read More</Link>
    </article>
  );
}
