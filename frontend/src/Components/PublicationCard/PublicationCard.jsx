import styles from "./PublicationCard.module.css";

// The component now accepts props
function PublicationCard({ title, author, conference, doi }) {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.title}>
                    <h3>{title}</h3>
                </div>
                <div className={styles.author}>
                    <p>Author: {author}</p>
                </div>
                <div className={styles.conference}>
                    <p>Conference: {conference}</p>
                </div>
            </div>
            <div className={styles.doi}>
                <button onClick={() => window.open(doi , "_blank")}> <img src="/link.svg" alt="link" />
                    <p>DOI</p></button>
            </div>
        </div>
    );
}

export default PublicationCard;