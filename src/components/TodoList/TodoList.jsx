import React from 'react'
import styles from './TodoList.module.css'
import TodoItem from "../TodoItem/TodoItem"

const TodoList = () => {


  return (
    <ul className={styles.todoList}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </ul>
  )
}

export default TodoList