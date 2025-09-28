import './Blogs.css';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import BlogList1 from '../../Components/Blogs/BlogList1.jsx';  // Featured Articles List
import BlogList2 from '../../Components/Blogs/BlogList2.jsx';  // Latest Articles List
import BlogCard1 from '../../Components/Blogs/BlogCard1.jsx'; // For Featured Articles
import BlogCard2 from '../../Components/Blogs/BlogCard2.jsx'; // For Latest Articles
import blogsData from '../../db/blogs.json';
import featuredBlogsData from '../../db/featured.json';

const Blogs = () => {
  const [search, setSearch] = useState('');

  // Extract unique categories from both featured and latest blogs combined
  const allBlogsCombined = [...featuredBlogsData, ...blogsData];
  const uniqueCategories = [...new Set(allBlogsCombined.map(blog => blog.category))];

  // Filter featured blogs by search
  const filteredFeaturedBlogs = featuredBlogsData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.description?.toLowerCase().includes(search.toLowerCase()) ||
    blog.category.toLowerCase().includes(search.toLowerCase())
  );

  // Filter latest blogs by search
  // Also exclude blogs that appear in featured (based on id)
  const featuredIds = featuredBlogsData.map(blog => blog.id);
  const filteredLatestBlogs = blogsData.filter((blog) =>
    !featuredIds.includes(blog.id) &&
    (
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description?.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleClearSearch = () => setSearch('');

  return (
    <div className="blogs-container">
      {/* Header Banner */}
      <div className="header-banner">
        <h1 className="banner-title">Research Blogs</h1>
        <p className="banner-description">
          Insights, discoveries, and thoughts from our research team on cutting-edge technologies
        </p>

        
      </div>
{/* Search Bar */}
<div className="search-bar-wrapper">
  <div className="search-input-wrapper">
    <FaSearch className="search-icon" />
    <input
      type="text"
      placeholder="Search blogs..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-input"
    />
  </div>
</div>

        {/* Category Filters */}
<div className="category-filters">
  <button
    key="all-topics"
    onClick={handleClearSearch}
    className={`category-button ${search === '' ? 'active' : ''}`}
    type="button"
  >
    All Topics
  </button>

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

</div>

      {/* Blog List */}
      <div className="blog-list-wrapper">
        {(filteredFeaturedBlogs.length + filteredLatestBlogs.length) > 0 ? (
          <>
            {/* Featured Articles Section */}
{filteredFeaturedBlogs.length > 0 && (
  <section className="featured-articles">
    <h1>Featured Articles</h1>
    <BlogList1 blogs={filteredFeaturedBlogs} />
  </section>
)}

{/* Latest Articles Section */}
{filteredLatestBlogs.length > 0 && (
  <section className="latest-articles">
    <h1>Latest Articles</h1>
    <BlogList2 blogs={filteredLatestBlogs} />
  </section>
)}

          </>
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

              <h3 className="no-blogs-title">No Blogs found</h3>

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