import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import styles from "./BlogCard1.module.css";  // import styles as object

const BlogCard1 = ({ blog }) => {
  return (
    <Link
      to={`/blogs/${blog.id}`}
      className={styles.blogCardLink}
      aria-label={`Read full article: ${blog.title}`}
    >
      <div className={styles.blogCard}>
        <div className={styles.featuredBadge}>Featured</div>

        <div className={styles.blogCardContent}>
          <h2 className={styles.blogCardTitle}>{blog.title}</h2>
          <p className={styles.blogCardExcerpt}>{blog.excerpt}</p>

          <div className={styles.blogCardMeta}>
            <div className={styles.authorLine}>
              <FaUser className={styles.authorIcon} aria-hidden="true" />
              <span className={styles.blogCardAuthor}>{blog.author}</span>
            </div>
            <div className={styles.blogCardCategory}>{blog.category}</div>
          </div>

          <Link to={`/blogs/${blog.id}`} className={styles.readFullArticleBtn} aria-label={`Read blog: ${blog.title}`}>
  Read Full Article
</Link>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard1;
