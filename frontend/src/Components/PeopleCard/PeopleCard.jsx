import { useState } from 'react'; // 1. Import useState
import styles from "./PeopleCard.module.css";

function PeopleCard({ image, name, description, batch, email, domain }) {
    // 2. Add state to manage the expanded view
    const [isExpanded, setIsExpanded] = useState(false);

    const charLimit = 200; // The number of characters to show before truncating

    // 3. Logic for truncating text and the "Show More" button
    const needsTruncation = description.length > charLimit;
    const displayText = isExpanded ? description : `${description.substring(0, charLimit)}...`;

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.top}>
                    <div className={styles.name}><h2>{name}</h2></div>
                    <div className={styles.batch}><p>{batch}</p></div>
                </div>
                <div className={styles.domain}><p>{domain}</p></div>
                <div className={styles.description}>
                    <p>{displayText}</p>
                    {/* 4. Conditionally render the button if text is long */}
                    {needsTruncation && (
                        <button onClick={toggleReadMore} className={styles.toggleButton}>
                            {isExpanded ? 'Show Less' : 'Show More'}
                        </button>
                    )}
                </div>
                <div className={styles.emailContainer}>
                    <div className={styles.email}><p>{email}</p></div>
                    <img src="email.svg" alt="email" />
                </div>
            </div>
            <div className={styles.image}>
                <img src={image} alt={name} />
            </div>
        </div>
    );
}

export default PeopleCard;