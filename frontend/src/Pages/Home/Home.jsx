import styles from "./Home.module.css"
import { Link } from 'react-router-dom';
import HomeCard from "../../Components/HomeCard/HomeCard";

function Home(){
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="NGCNLogo.png" alt="Logo" />
            </div>
            <div className={styles.title}>
                <h2>Research at the Edge of Computing & Networking</h2>
            </div>
            <div className={styles.titleButton}>
                <Link to='/About'><button><p>Learn more</p></button></Link>
            </div>
            <div className={styles.cards}>
                <HomeCard />
            </div>
        </div>
    )
}

export default Home;