import { useParams, Link } from "react-router-dom";
import blogsData from "../../db/blogs.json";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react"; // ✅ Added import

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === Number(id));

  // ✅ Scroll to top when the blog post loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center text-gray-500 mt-20">
        Blog not found.
      </div>
    );
  }

  const markdownComponents = {
    h1: ({ node, ...props }) => (
      <h1 className="text-3xl font-extrabold my-8 text-gray-900" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800" {...props} />
    ),
    p: ({ node, ...props }) => (
      <p className="leading-relaxed mb-6 text-gray-700" {...props} />
    ),
    a: ({ node, ...props }) => (
      <a
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        to="/blogs"
        className="inline-block mb-8 px-6 py-2 border border-gray-400 text-gray-600 rounded-lg font-semibold transition-colors duration-300 hover:bg-gray-200 hover:text-gray-900"
      >
        ← Back to Blogs
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900 mb-3">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500">
            By <span className="font-semibold">{blog.author}</span> | {blog.date}
          </p>
        </header>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-w-full h-auto rounded-xl shadow-lg mb-10"
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
