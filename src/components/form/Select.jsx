import styles from './Select.module.css'

function Select ({ text, name, options, handleOnChange, value }) {
    return(
        <div className={styles.formController}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} text={text}>
                <option>Select</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}> {option.nome} </option>
                ))}
            </select>
        </div>
    )
}

export default Select