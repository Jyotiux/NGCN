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
      {/* Header Banner */}
      <div className="header-banner">
        <h1 className="banner-title">
          Our Blogs
        </h1>

        <p className="banner-description">
          Insights, discoveries, and thoughts from our research team on cutting-edge technologies
        </p>

        {/* Search Bar */}
        <div className="search-bar-wrapper">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          {search && (
            <button
              onClick={handleClearSearch}
              className="clear-button"
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSearch(category)}
              className={`category-button ${search === category ? 'active' : ''}`}
              type="button"
            >
              {category}
            </button>
          ))}

          {/* Clear Button */}
          {search && (
            <button
              onClick={handleClearSearch}
              className="clear-filters-button"
              type="button"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Blog List */}
      <div className="blog-list-wrapper">
        {filteredBlogs.length > 0 ? (
          <BlogList blogs={filteredBlogs} />
        ) : (
          search.trim() !== '' && (
            <div className="no-blogs-found">
              <svg
                className="no-blogs-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h6m-6 4h8M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
                />
              </svg>

              <h3 className="no-blogs-title">
                No Blogs found
              </h3>

              <p className="no-blogs-text">
                Try adjusting your search terms or browse all blogs by clearing the filter.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Blogs;
