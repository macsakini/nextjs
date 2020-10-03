import styles from '../styles/header.module.css'

function Header(){
    return(
        <header>
            <nav className={styles.nav}>
            <div className={styles.container}>
            <img src="/images/cwa_logo.jpg" width="70"></img>
                <p>CWA</p>
            </div>
            <div className={styles.navitems}>
                <button>Overview</button>
                <button>E-Statement</button>
                <button>Contact Us</button>
                <button id={styles.logout}>Log Out</button>
            </div>
            </nav>
        </header>
    )
}

export default Header