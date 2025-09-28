import BlogCard2 from './BlogCard2';  
import './BlogList.css';

const BlogList2 = ({ blogs }) => {
  if (!blogs.length) {
    return <p className="no-blogs-message">No latest blogs found.</p>;
  }

  return (
    <div className="blog-list-grid" role="list">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-list-item" role="listitem">
          <BlogCard2 blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogList2;
