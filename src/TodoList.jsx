import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({todos, onCheck, onDelete}) => {
  return (
    <ul>
    {todos.map(todo => {
     return(
        <TodoListItem todo={todo} onCheck={onCheck} onDelete={onDelete}/>
     )
    })} 
   </ul>
  )
}

export default TodoList