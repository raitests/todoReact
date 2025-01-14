import { useEffect, useState } from "react"
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
 const [todos, setTodos] =  useState(()=> {
  const localValue = localStorage.getItem("ITEMS");
  if (localValue == null) return [];
  return JSON.parse(localValue);
 });

 useEffect(()=>{
  localStorage.setItem("ITEMS", JSON.stringify(todos));
 }, [todos])
  
 const handleCheck = (id, completed)=> {
  setTodos(prevTodos => {
    return prevTodos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed}}
      return todo;
    })
  }
  )
 }
const handleDelete = (id)=> {
  setTodos(preTodos=> {
    return preTodos.filter(todo => todo.id !==id)
  })
} 
const addTodo = (title)=> {
        setTodos(prevTodos => [...prevTodos, {id: crypto.randomUUID(), 
          title, completed: false}]);
}
  return <>
  <TodoForm onSubmit={addTodo}/>
  <h1>Todo</h1>
  <TodoList todos={todos} onCheck = {handleCheck} onDelete={handleDelete}/>
  </>
}
export default App
