import React,{useState} from 'react'

function TodoForm() {
const [input, setInput] = useState('')

  return (
    <form className='todo-form'>
        <input 
        type='text' 
        placeholder='Agregar tarea por hacer' 
        value={input} 
        name='text'
        className='todo-input' 
        />
        <button className="todo-button"> Agregar tarea</button>
    </form>
  )
}

export default TodoForm