import BlogCard from "./BlogCard";
import "./BlogList.css";

const BlogList = ({ blogs }) => {
  if (!blogs.length) {
    return (
      <p className="no-blogs-message">
        No blogs found.
      </p>
    );
  }

  return (
    <div className="blog-list-grid" role="list">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="blog-list-item"
          role="listitem"
        >
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
