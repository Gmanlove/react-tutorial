/* eslint-disable */
import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // add todo
        addTodo(value);
        // clear form after submission
        setValue('');
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Enter your task for today' />
    <button type="submit" className='todo-btn'>Enter Task</button>
  </form>
  )
}

