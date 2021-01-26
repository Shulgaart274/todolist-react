import React from 'react'
import styles from "./Checkbox.module.css"

const Checkbox = () => {

  return (
    <label className={styles.todoItemCheckbox}>
    <input type="checkbox" />
    <span className={styles.checkmark}></span>
  </label>
  )
}

export default Checkbox;