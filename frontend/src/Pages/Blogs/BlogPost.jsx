import { useParams, Link } from "react-router-dom";
import blogsData from "../../db/blogs.json";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import "./BlogPost.css"; // Import the CSS file

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="not-found">
        Blog not found.
      </div>
    );
  }

  const markdownComponents = {
    h1: ({ node, ...props }) => (
      <h1 className="markdown-h1" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="markdown-h2" {...props} />
    ),
    p: ({ node, ...props }) => (
      <p className="markdown-p" {...props} />
    ),
    a: ({ node, ...props }) => (
      <a
        className="markdown-link"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
  };

  return (
    <div className="container">
      <Link to="/blogs" className="back-link">
        ← Back to Blogs
      </Link>

      <article>
        <header className="post-header">
          <h1 className="post-title">{blog.title}</h1>
          <p className="post-meta">
            By <span className="author-name">{blog.author}</span> | {blog.date}
          </p>
        </header>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="post-image"
          />
        )}

        <ReactMarkdown components={markdownComponents}>
          {blog.content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPost;
