import React from 'react'
import styles from "./TodoItem.module.css"
import Checkbox from "../Checkbox/Checkbox"
import DeleteButton from "../DeleteButton/DeleteButton"

const TodoItem = () => {

  return (
    <li className={styles.todoItem}>
              <Checkbox />
              <span>jumanji</span>
              <DeleteButton />
     </li>
  )
}

export default TodoItem