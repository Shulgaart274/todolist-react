import React from 'react'
import styles from "./MainPage.module.css"
import TextInput from "../TextInput/TextInput"
import Footer from "../Footer/Footer"
import ToggleAll from '../ToggleAll/ToggleAll'
import TodoList from "../TodoList/TodoList"



const MainPage = (props) => {

  // const checkTodo = props.todos.some(todo => todo.completed === false)
  // // console.log(checkTodo)
  // // console.log(props.todo.id)
  // const check = () => {
  //   if (checkTodo === true) {
  //     const action = checkAll(props.todo.id)
  //     props.dispatch(action)
  //   } else {
  //     const action = uncheckAll(props.todo.id)
  //     props.dispatch(action)
  //   }
  // }

    return (
      
      <div className={styles.container}>
         <h1 className={styles.title}>todos</h1>
         <TextInput />
         <ToggleAll />
         <TodoList />
         <Footer />
      </div>
    )
}

export default MainPage