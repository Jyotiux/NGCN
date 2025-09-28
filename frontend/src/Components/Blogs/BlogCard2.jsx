import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import styles from "./BlogCard2.module.css";  

const BlogCard2 = ({ blog }) => {
  return (
    <Link
      to={`/blogs/${blog.id}`}
      className={styles.blogCardLink}
      aria-label={`Read blog: ${blog.title}`}
    >
      <div className={styles.blogCard}>
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

          {/* Read More button */}
          <span className={styles.readMoreBtn}>Read More</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard2;
