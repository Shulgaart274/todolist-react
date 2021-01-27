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

 const todos = props.todos

 const checkStatus = () => {

   switch(props.status) {
     case 'completed':
     return todos.filter(todo => todo.completed === true).map(todo => {
      return <TodoItem todo={todo} key={todo.id} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)}  />
    })
     case 'active':
     return todos.filter(todo => todo.completed === false).map(todo => {
      return <TodoItem todo={todo} key={todo.id} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)}  />
    })
     default:
     return todos.map(todo => {
      return <TodoItem todo={todo} key={todo.id} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)}  />
    })
   }

}

  return (
    <ul className={styles.todoList}>
        {checkStatus()}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    todos : state.todosReducer.todos,
    status: state.todosReducer.status
  }
}

export default connect(mapStateToProps, null)(TodoList)