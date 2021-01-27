import React from 'react'
import styles from "./ToggleAll.module.css"
import {connect} from "react-redux"
import {checkAll, uncheckAll} from "../../redux/action/todosAction"

const ToggleAll = (props) => {

  const checkTodo = props.todos.some(todo => todo.completed === false)

  const check = () => {
    if (checkTodo === true) {
      const action = checkAll();
      props.dispatch(action)
    } else {
      const action = uncheckAll();
      props.dispatch(action)
    }
  }


  return (
    <label className={styles.toggleAll}>
    <input type="checkbox" className={styles.toggleAllCheckbox} onChange={check} />
    <span className={checkTodo? styles.toggleAllSpan : `${styles.toggleAllSpan} ${styles.toggleAllChecked}`}></span>
  </label>
  )
}

const mapStateToProps = state => {
  return {
  todos: state.todosReducer.todos
  }
}

export default connect(mapStateToProps, null)(ToggleAll)