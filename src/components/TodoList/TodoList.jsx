import React from 'react'
import styles from './TodoList.module.css'
import TodoItem from "../TodoItem/TodoItem"
import {connect} from "react-redux"
import {deleteTodo, completedTodo} from "../../redux/action/todosAction"

const TodoList = (props) => {

 const onDelete = (id) => {
  
   const action = deleteTodo(id)
   props.dispatch(action)
 }

 const onToggle = (id) => {
   const action = completedTodo(id)
   props.dispatch(action)
 }


  return (
    <ul className={styles.todoList}>
      
        {props.todos.map(todo => {
          return <TodoItem todo={todo} key={todo.id} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)}  />
        })}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    todos : state.todosReducer.todos
  }
}

export default connect(mapStateToProps, null)(TodoList)