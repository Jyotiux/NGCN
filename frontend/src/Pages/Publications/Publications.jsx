import { useState, Fragment } from 'react';
import PublicationCard from '../../Components/PublicationCard/PublicationCard';
import pub from '../../db/publications.json';
import styles from './Publications.module.css';

function Publications() {
    
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPubs = pub.filter(card => {
        const query = searchQuery.toLowerCase();
        const titleMatch = card.title.toLowerCase().includes(query);
        const authorsMatch = card.authors.toLowerCase().includes(query);
        const conferenceMatch = card.conference ? card.conference.toLowerCase().includes(query) : false;
        const yearMatch = card.year.toString().includes(query);

        return titleMatch || authorsMatch || conferenceMatch || yearMatch;
    });

    const groupedPubs = filteredPubs.reduce((acc, pub) => {
        const year = pub.year;
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(pub);
        return acc;
    }, {});

    const sortedYears = Object.keys(groupedPubs).sort((a, b) => b - a);


    return (
        <div className={styles.container}>
            <div className={styles.block1}>
                <h1>Publications</h1>
                <p>Peer-reviewed research papers and scholarly contributions to the scientific community</p>
                </div>
                <div className={styles.search}>
                    <img src="search.svg" alt="Search Icon" className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search publications"
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>


            <div className={styles.pubContainer}>
                {sortedYears.map(year => (
                    <Fragment key={year}>
                        <h2 className={styles.yearHeading}>{year}</h2>
                        {groupedPubs[year].map(card => (
                            <PublicationCard
                                key={card.id}
                                title={card.title}
                                author={card.authors}
                                conference={card.conference}
                                doi={card.doi}
                            />
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default Publications;