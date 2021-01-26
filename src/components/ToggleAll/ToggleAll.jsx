import React from 'react'
import styles from "./ToggleAll.module.css"

const ToggleAll = () => {

  return (
    <label className={styles.toggleAll}>
    <input type="checkbox" className={styles.toggleAllCheckbox} />
    <span className={styles.toggleAllSpan}></span>
  </label>
  )
}

export default ToggleAll