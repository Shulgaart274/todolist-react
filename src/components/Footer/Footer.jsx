import React from 'react'
import styles from './Footer.module.css'
import {connect} from "react-redux"
import {activeTodos, completedTodos, allTodos, deleteCompletedTodos} from "../../redux/action/todosAction"


const Footer = (props) => {

  const completed = props.todos.filter(todo => todo.completed === true)

  const activeHandler = () => {
    const action = activeTodos();
    props.dispatch(action)
  }

  const completedHandler = () => {
    const action = completedTodos()
    props.dispatch(action)
  }

  const allHandler = () => {
    const action = allTodos()
    props.dispatch(action)
  }

  const removeCompletedHandler = () => {
    const action = deleteCompletedTodos()
    props.dispatch(action)
  }

  return (
    <section className={props.todos.length? styles.todoFilter : 'hidden'}>
    <div className={styles.todoFilterContainer}>
      <span className={styles.todoFilterCounter}>{completed.length} items left</span>
      <ul className={styles.todoFilterList}>
        <li className={styles.todoFilterItem}>
          <button className={styles.todoFilterAll} onClick={allHandler}>All</button>
        </li>
        <li className={styles.todoFilterItem}>
          <button className={styles.todoFilterActive} onClick={activeHandler}>
           Active
            </button>
        </li>
        <li className={styles.todoFilterItem}>
          <button className={styles.todoFilterCompleted} onClick={completedHandler}>
          Completed
            </button>
        </li>
      </ul>
      <span className={styles.todoFilterClear}
        ><button className={completed.length? styles.todoFilterClearall : 'hidden'} onClick={removeCompletedHandler}>
          Clear completed
        </button></span>
    </div>
  </section>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    activeTodos: state.todosReducer.activeTodos,
    completedTodos: state.todosReducer.completedTodos
  }
}

export default connect(mapStateToProps, null)(Footer);