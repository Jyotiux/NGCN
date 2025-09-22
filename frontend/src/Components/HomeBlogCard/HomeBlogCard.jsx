import styles from "./HomeBlogCard.module.css";
import { Link } from "react-router-dom";


// The component now accepts props
function HomeBlogCard({ image, title, description, link }) {
    return (
        // <div className={styles.container} onClick={() => window.location.href = link}>
        <div className={styles.container}>
                        <Link to={link}>
            <div className={styles.image}><img src={image} alt="Image" /></div>
            <div className={styles.title}><h2>{title}</h2></div>
            <div className={styles.description}><p>{description}</p></div>
            </Link>
        </div>
    );
}
 
export default HomeBlogCard;