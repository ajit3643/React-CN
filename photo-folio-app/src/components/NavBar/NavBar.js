import styles from './NavBar.module.css';
import logo from './logo.png'
const NavBar = () => {
    return (
        <div className={styles.header}>
            <img src={logo} alt="logo"/>
            <span className="text">PhotoFolio</span>
        </div>
    )
}

export default NavBar;