
import styles from '../styles/header.module.css'

export default function SinglePay({children}){
    return(
        <div className={styles.singlepaymajor}>
            {children}
            <div>
                <h2 className={styles.h2}>Allowed Actions</h2>
            </div>
            <div className={styles.payactions}>
                <button>Send Client "Thank You note"</button>
                <button>Query CWA Team on this Payment</button>
                <button>Call Client for more information</button>
            </div>
        </div>
    )
}