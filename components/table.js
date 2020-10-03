import styles from '../styles/header.module.css'
import { MdArrowBack,MdArrowForward } from "react-icons/md";

export default function Table({children}) {
    return( 
            <div className={styles.main}>
            <table className={styles.table}>
                <tr>
                    <th>Transaction ID</th>
                    <th>Status</th>
                    <th>Customer Number</th>
                    <th>Mpesa Code</th>
                    <th>Purpose</th>
                    <th>Total Amount</th>
                    <th>Amount Settled</th>
                    <th>Transaction Cost</th>
                    <th>Date</th>
                    <th>Options</th>
                </tr>
                {children}
            </table>
            <div className={styles.tablenav}>
                <span><MdArrowBack/>Previous</span>
                <span>Next<MdArrowForward/></span>
            </div>
            </div>
    )
}
