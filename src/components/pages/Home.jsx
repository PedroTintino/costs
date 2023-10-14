import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
     <section className={styles.homeContainer}>
        <h1>Wellcome to your <span>Costs</span>!</h1>
        <p>Your best project manager!</p>
        <LinkButton to='/newproject' text='New Project' />
        <img src={savings} alt="costs" />
     </section>
    )
}

export default Home