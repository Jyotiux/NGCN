import BlogCard1 from './BlogCard1';  
import './BlogList.css';

const BlogList1 = ({ blogs }) => {
  if (!blogs.length) {
    return <p className="no-blogs-message">No featured blogs found.</p>;
  }

  return (
    <div className="blog-list-grid1" role="list">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-list-item1" role="listitem">
          <BlogCard1 blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogList1;
