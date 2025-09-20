import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.id}`} style={{ textDecoration: "none" }} className="block group">
      <div className="w-full h-[26rem] flex flex-col rounded-xl shadow-md hover:shadow-lg transition-transform duration-1000 ease-in-out bg-white overflow-hidden p-2 hover:-translate-y-0.25">

        {/* Image */}
        <div
          className="h-44 bg-cover bg-center rounded-t-xl transition-transform duration-1000"
          style={{ backgroundImage: `url(${blog.thumbnail})` }}
        ></div>

        {/* Content */}
        <div className="flex-1 px-2 py-4 flex flex-col justify-between">
          {/* Title */}
          <h2 className="text-[var(--primary)!important] hover:text-[var(--accent)!important] font-semibold text-lg leading-snug line-clamp-2 transition-colors duration-1000">
  {blog.title}
</h2>


          {/* Excerpt */}
          <p className="text-gray-600 text-sm mt-2 line-clamp-3">
            {blog.excerpt}
          </p>

          {/* Author and Category */}
          <div className="flex flex-col gap-1 mt-4">
  {/* Author */}
  <span className="text-sm font-medium text-[var(--secondary)]">{blog.author}</span>

  {/* Category Badge */}
  <span className="text-xs text-gray-700 bg-gray-200 rounded-full px-3 py-1 w-max">
    {blog.category}
  </span>
</div>

        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
