import { CHECK_ALL, COMPLETED_TODO, CREATE_TODO, DELETE_TODO, UNCHECK_ALL } from "../types/types"

let initialState = {
  todos: [],
  todo: [],
}


const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_TODO:
      return { ...state, todos: state.todos.concat(action.payload) }
    case COMPLETED_TODO:
      return {...state, todos: state.todos.map(todo => {
        const el = { ...todo};
        if (todo.id === action.payload) {
           el.completed = !el.completed
        }
        return el;
      })}
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) }

      case CHECK_ALL:
        return {...state, todos: state.todos.map(todo => {
          const el = {...todo}
         
            el.completed = true;
          
          return el
        })}
      case UNCHECK_ALL:
        return {...state, todos: state.todos.map(todo => {
          const el = {...todo}
         
            el.completed = false;
          
          return el
        })}
    
    default:
      return state
  }
}

export default todosReducer