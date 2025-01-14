import React from 'react'

const TodoListItem = ({todo, onCheck, onDelete}) => {
  return (
    <li id={todo.id}>
    <label>
      <input type="checkbox" checked={todo.completed} 
      onChange={e=> onCheck(todo.id, e.target.checked)}
   />
      {todo.title}
    </label>
     <button className="btn btn-danger" onClick={() => onDelete(todo.id)} >Delete</button>
  </li>
  )
}

export default TodoListItem