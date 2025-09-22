import styles from "./HomeBlogCard.module.css";

// The component now accepts props
function HomeBlogCard({ image, title, description, link }) {
    return (
        <div className={styles.container} onClick={() => window.location.href = link}>
            {/* Use the props instead of hardcoded values */}
            <div className={styles.image}><img src={image} alt="Image" /></div>
            <div className={styles.title}><h2>{title}</h2></div>
            <div className={styles.description}><p>{description}</p></div>
        </div>
    );
}
 
export default HomeBlogCard;