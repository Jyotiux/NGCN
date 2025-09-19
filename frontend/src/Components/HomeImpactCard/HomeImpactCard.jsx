import styles from "./HomeImpactCard.module.css";

// The component now accepts props
function HomeImpactCard({ image, title, description, tag }) {
    return (
        <div className={styles.container}>
            {/* Use the props instead of hardcoded values */}
            <div className={styles.image}><img src={image} alt="Image" /></div>
            <div className={styles.title}><h2>{title}</h2></div>
            <div className={styles.description}><p>{description}</p></div>
            <div className={styles.data}>{tag}</div>
        </div>
    );
}

export default HomeImpactCard;