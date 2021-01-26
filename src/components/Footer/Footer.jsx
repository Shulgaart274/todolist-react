import React from 'react'
import styles from './Footer.module.css'


const Footer = () => {


  return (
    <section className={styles.todoFilter}>
    <div className={styles.todoFilterContainer}>
      <span className={styles.todoFilterCounter}></span>
      <ul className={styles.todoFilterList}>
        <li className={styles.todoFilterItem}>
          <button className={styles.todoFilterAll}>All</button>
        </li>
        <li className={styles.todoFilterItem}>
          <button className={styles.todoFilterActive}>Active</button>
        </li>
        <li className={styles.todoFilterItem}>
          <button className={styles.todoFilterCompleted}>Completed</button>
        </li>
      </ul>
      <span className={styles.todoFilterClear}
        ><button className={styles.todoFilterClearall}>
          Clear completed
        </button></span>
    </div>
  </section>
  )
}

export default Footer;