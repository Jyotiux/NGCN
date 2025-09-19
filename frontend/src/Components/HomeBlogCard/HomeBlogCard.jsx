import styles from "./HomeBlogCard.module.css";

// The component now accepts props
function HomeBlogCard({ image, title, description, tag }) {
    return (
        <div className={styles.container}>
            {/* Use the props instead of hardcoded values */}
            <div className={styles.image}><img src={image} alt="Image" /></div>
            <div className={styles.title}><h2>{title}</h2></div>
            <div className={styles.description}><p>{description}</p></div>
        </div>
    );
}
 
export default HomeBlogCard;