import { useEffect, useState } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

function ProjectForm({ btnText }){

    const [categories, setCategories] = useState([])

    useEffect(() => {
        
    fetch("http://localhost:5000/categories", {
        method: "GET",
        headers:{
            'Content-type': 'application/json',
        },
    }).then( (res) => res.json())
    .then((data) => {
        setCategories(data)
    })
    .catch( (e) => console.log(e))
    }, [])

    return(
        <form className={styles.form}>
            <Input type="text" text="Project name" name="name" placeholder="Type the project name" />
            <Input type="number" placeholder="Type the value max range" />
            <Select name="category_id" text="Select a category" options={categories}/>
            <Submit text={btnText}/>
        </form>
    ) 
}

export default ProjectForm