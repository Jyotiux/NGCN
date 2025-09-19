import styles from "./HomeNewsCard.module.css";

// The component now accepts props
function HomeNewsCard({ date, title, description, tag }) {
    return (
        <div className={styles.container}>
            {/* Use the props instead of hardcoded values */}
            <div className={styles.up}>
                <div className={styles.data}>{tag}</div>
                <div className={styles.date}> <p>{date}</p></div>
            </div>
            <div className={styles.down}>
                <div className={styles.title}><h2>{title}</h2></div>
                <div className={styles.description}><p>{description}</p></div>
            </div>
        </div>
    );
}

export default HomeNewsCard;