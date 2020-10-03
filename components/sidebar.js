import styles from '../styles/header.module.css'

export default function Sidebar(){
    return(
        <div className={styles.sidebar}>
            <h2>Search</h2>
            <input type="text" placeholder="Search..." name="search"></input>
            <br></br>
            <button>Submit</button>
            <h2>About Us</h2>
            <p>CWA is a company that specializes in management of church digial content.
                From transactions to church photos we do it all. WE make the church virtual and 
                accessile from anywhere around the globe at any time.
            </p>
            <h2>Access CMS</h2>
            <div>
            <p>Bulk Messaging</p>
            <p>Payments</p>
            <p>Events</p>
            <p>Gallery</p>
            <p>Messages</p>
            <p>Online Meetings</p>
            </div>
        </div>
    )
}