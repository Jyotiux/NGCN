import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.id}`} style={{ textDecoration: "none" }} className="block group">
      <div
        className="w-80 h-96 flex flex-col rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 bg-white overflow-hidden p-2 hover:-translate-y-0.5"
      >
        {/* Image */}
        <div
          className="h-44 bg-cover bg-center rounded-t-xl transition-transform duration-300"
          style={{ backgroundImage: `url(${blog.thumbnail})` }}
        ></div>

        {/* Content */}
        <div className="flex-1 px-4 py-3 flex flex-col justify-between">
          <h2 className="text-primary font-semibold text-lg leading-snug line-clamp-2">
            {blog.title}
          </h2>
          <p className="text-gray-500 text-sm mt-2 line-clamp-3">
            {blog.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
