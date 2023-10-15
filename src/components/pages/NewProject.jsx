import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){
    return(
        <div className={styles.newprojectContainer}>
            <h1>Create a new project</h1>
            <p>Create a new cost plan for your project list.</p>
            <ProjectForm btnText="New Project" />
        </div>
    )
}

export default NewProject