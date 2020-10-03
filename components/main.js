import styles from '../styles/header.module.css'

export default function Main({children}){
    return(
        <div className={styles.allcontent}>
            {children}
        </div>
    )
}