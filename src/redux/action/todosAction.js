import { CREATE_TODO, COMPLETED_TODO, DELETE_TODO, CHECK_ALL, UNCHECK_ALL } from '../types/types'

export function createTodo(todo) {
  return {
    type: CREATE_TODO,
    payload: todo
  }
}

export function completedTodo(id) {
  return {
    type: COMPLETED_TODO,
    completed: false,
    payload: id
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export function checkAll() {
  return {
    type: CHECK_ALL,
    
  }
}

export function uncheckAll() {
  return {
    type: UNCHECK_ALL,
   
  }
}