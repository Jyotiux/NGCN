import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  if (!blogs.length) {
    return (
      <p className="text-center text-lg text-gray-500 mt-10 font-medium">
        No blogs found.
      </p>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="transform transition-all duration-300 ease-in-out hover:scale-[1.02] animate-fade-in hover:rounded-lg"
        >
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
