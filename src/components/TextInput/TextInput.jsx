import React from 'react'
import styles from './TextInput.module.css'

const TextInput = () => {


  return (
    <form className={styles.form} id="form">
          <input
            type="text"
            className={styles.input}
            form="form"
            placeholder="What needs to be done?"
            required
          />
        </form>
  )
}

export default TextInput