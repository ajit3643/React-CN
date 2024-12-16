
import styles from "./Home.module.css";

function Home(){

    return(
        <div className={styles.container}>
            <a href="todo" className={"btn btn-warning "+styles.link}>
                To Do App
            </a>
            <a href="notes" className={"btn btn-warning "+styles.link}>
                Note Keeper
            </a>
        </div>
    )
}

export default Home;