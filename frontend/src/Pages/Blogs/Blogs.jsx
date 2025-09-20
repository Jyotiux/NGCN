import './Blogs.css'
import { useState } from "react";
import BlogList from "../../Components/Blogs/BlogList.jsx";
import blogsData from "../../db/blogs.json";

const Blogs = () => {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.description?.toLowerCase().includes(search.toLowerCase())
  );

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
  <div className="blogs-container">
  

    <>
      {/* Gradient block full width on top */}
      <div className="w-full flex flex-col items-center justify-center bg-gradient-to-l from-[var(--accent)] to-[var(--primary)] py-20">
        <h1
  className="text-[3rem] mb-4 !text-white"
  style={{ color: 'white !important' }}
>
  Our Blogs
</h1>

        <p className="text-white
text-xl max-w-3xl text-center px-4">
          Insights, discoveries, and thoughts from our research team on cutting-edge technologies
        </p>
      </div>

      {/* Main content container */}
      <div className="p-6 max-w-6xl mx-auto mt-10">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Clear button */}
          {search && (
            <button
              onClick={handleClearSearch}
              className="absolute right-4 top-2 text-sm text-blue-500 hover:underline"
            >
              Clear
            </button>
          )}
        </div>

        {/* Show filtered blogs or no results message */}
        {filteredBlogs.length > 0 ? (
          <BlogList blogs={filteredBlogs} />
        ) : (
          search.trim() !== "" && (
            <div className="text-center py-12 col-span-full animate-fade-in">
              <div className="text-gray-500">
                <svg
                  className="mx-auto h-20 w-20 text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h6m-6 4h8M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
                  />
                </svg>
              </div>
              <div className="text-[#49709c] text-lg font-medium mb-2">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Blogs found
                </h3>
              </div>
              <div className="text-[#49709c] text-sm">
                Try adjusting your search terms or browse all blogs by clearing the search.
              </div>
            </div>
          )
        )}
      </div>
    </>
    </div>
  );
};

export default Blogs;
