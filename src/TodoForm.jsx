import React from 'react'
import { useState } from 'react';

const TodoForm = ({onSubmit}) => {
    const[input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input === "") return;
        onSubmit(input);
        setInput('');
    }
    const handleInput = (e)=> {
        setInput(e.target.value);
       }

  return (
    <form>
    <label className="addLabel">
      <input type="text" onChange={handleInput} value={input}></input>
      <button className="btn" onClick={handleSubmit} >Add</button>
    </label>
  </form>
  )
}

export default TodoForm;