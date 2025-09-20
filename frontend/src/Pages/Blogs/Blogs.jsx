import './Blogs.css';
import { useState } from 'react';
import BlogList from '../../Components/Blogs/BlogList.jsx';
import blogsData from '../../db/blogs.json';

const Blogs = () => {
  const [search, setSearch] = useState('');

  // Extract unique categories
  const uniqueCategories = [...new Set(blogsData.map(blog => blog.category))];

  // Filter blogs by title, description, or category
  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.description?.toLowerCase().includes(search.toLowerCase()) ||
    blog.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleClearSearch = () => setSearch('');

  return (
    <div className="blogs-container">
      <>
        {/* Header Banner */}
        <div className="w-full flex flex-col items-center justify-center bg-gradient-to-l from-[var(--accent)] to-[var(--primary)] py-10 px-4 mb-5">
          <h1 className="text-[3rem] mb-4" style={{ color: 'var(--background)' }}>
            Our Blogs
          </h1>

          <p className="text-white text-xl max-w-3xl text-center mb-6 px-4">
            Insights, discoveries, and thoughts from our research team on cutting-edge technologies
          </p>

          {/* Search Bar */}
<div className="relative w-full max-w-3xl h-10 mb-4">
  <input
    type="text"
    placeholder="Search blogs..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full h-full px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white bg-[var(--background)] bg-opacity-90"
  />
  {search && (
    <button
      onClick={handleClearSearch}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-blue-700 hover:underline"
    >
      Clear
    </button>
  )}
</div>

{/* Category Filters */}
<div className="flex flex-wrap justify-center gap-2">
  {uniqueCategories.map((category) => (
    <button
      key={category}
      onClick={() => setSearch(category)}
      className={`text-sm rounded-full px-4 py-1 border transition 
        ${
          search === category
            ? 'bg-[var(--emphasis)] text-black font-medium border-transparent'
            : 'bg-[var(--background)] bg-opacity-80 text-gray-800 border-gray-300 hover:bg-opacity-100'
        }`}
    >
      {category}
    </button>
  ))}

  {/* Clear Button */}
  {search && (
    <button
      onClick={handleClearSearch}
      className="text-sm rounded-full px-4 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
    >
      Clear Filters
    </button>
  )}
</div>

        </div>

        {/* Blog List */}
        <div className="w-full px-4 sm:px-8 lg:px-16 mt-4 mb-9">
          {filteredBlogs.length > 0 ? (
            <BlogList blogs={filteredBlogs} />
          ) : (
            search.trim() !== '' && (
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
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Blogs found
                </h3>
                <p className="text-[#49709c] text-sm">
                  Try adjusting your search terms or browse all blogs by clearing the filter.
                </p>
              </div>
            )
          )}
        </div>
      </>
    </div>
  );
};

export default Blogs;
