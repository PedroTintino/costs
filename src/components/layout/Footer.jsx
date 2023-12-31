import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <p><strong>End of the line, cowboy.</strong></p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <FaLinkedin />
                </li>
                
                <li className={styles.item}>
                    <FaInstagram />
                </li>
                
                <li className={styles.item}>
                    <FaGithub />
                </li>
            </ul>
            <p><span>Costs</span> &copy; 2023. </p>
        </footer>
    )
}

export default Footer