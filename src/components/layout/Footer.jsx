import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer class={styles.footer}>
            <p><strong>End of the line, cowboy.</strong></p>
            <ul class={styles.list}>
                <li class={styles.item}>
                    <FaLinkedin />
                </li>
                
                <li class={styles.item}>
                    <FaInstagram />
                </li>
                
                <li class={styles.item}>
                    <FaGithub />
                </li>
            </ul>
            <p><span>Costs</span> &copy; 2023. </p>
        </footer>
    )
}

export default Footer