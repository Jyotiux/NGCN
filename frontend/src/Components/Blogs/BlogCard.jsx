import { Link } from "react-router-dom";
import "./BlogCard.css";
const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.id}`} className="blog-card-link" aria-label={`Read blog: ${blog.title}`}>
      <div className="blog-card">
        {/* Image */}
        <div
          className="blog-card-image"
          style={{ backgroundImage: `url(${blog.thumbnail})` }}
          role="img"
          aria-label={blog.title}
        ></div>

        {/* Content */}
        <div className="blog-card-content">
          {/* Title */}
          <h2 className="blog-card-title">
            {blog.title}
          </h2>

          {/* Excerpt */}
          <p className="blog-card-excerpt">
            {blog.excerpt}
          </p>

          {/* Author and Category */}
          <div className="blog-card-meta">
            <span className="blog-card-author">{blog.author}</span>
            <span className="blog-card-category">{blog.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
