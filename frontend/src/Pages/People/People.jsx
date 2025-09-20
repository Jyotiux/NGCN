import { useState } from 'react'; // 1. Import useState
import styles from './People.module.css';
import PeopleCard from '../../Components/PeopleCard/PeopleCard';
import peopleData from "../../db/people.json";

const allPeople = [...peopleData];

function People() {
    // 2. Add state for search and active filter
    const [searchQuery, setSearchQuery] = useState('');
    const [activeBatch, setActiveBatch] = useState('All Batches');

    // 3. Get all unique batches from the data for the filter buttons
    const batches = ['All Batches', ...new Set(allPeople.map(p => p.batch))];

    // 4. Filter the people based on the active batch and search query
    const filteredPeople = allPeople.filter(person => {
        const query = searchQuery.toLowerCase();
        
        // Check if the person matches the active batch
        const batchMatch = activeBatch === 'All Batches' || person.batch === activeBatch;

        // Check if the person matches the search query (name or expertise)
        const searchMatch = person.name.toLowerCase().includes(query) || 
                            person.expertise.toLowerCase().includes(query);

        return batchMatch && searchMatch;
    });

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>People</h1>
                <p>Meet the brilliant minds driving innovation in next-generation computing and networking</p>
            </div>

            {/* 5. Add the new search and filter controls */}
            <div className={styles.controls}>
                <div className={styles.searchBar}>
                    <img src="/search.svg" alt="Search" className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search by name, expertise"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className={styles.filterButtons}>
                    {batches.map(batch => (
                        <button
                            key={batch}
                            className={`${styles.filterBtn} ${activeBatch === batch ? styles.activeBtn : ''}`}
                            onClick={() => setActiveBatch(batch)}
                        >
                            {batch}
                        </button>
                    ))}
                </div>
            </div>

            {/* 6. Map over the new 'filteredPeople' array */}
            <div className={styles.peopleCards}>
                {filteredPeople.map((data, index) => (
                    <PeopleCard
                        key={index} // It's better to use a unique ID from your data if available
                        image={data.photo}
                        name={data.name}
                        description={data.description}
                        batch={data.batch}
                        domain={data.expertise}
                        email={data.email}
                    />
                ))}
            </div>
        </div>
    );
}

export default People;