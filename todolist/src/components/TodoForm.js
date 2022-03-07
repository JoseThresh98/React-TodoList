import React,{useState} from 'react'

function TodoForm(props) {
const [input, setInput] = useState('');

const handleChange = e => {
    setInput(e.target.value);
};


const handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
        id: Math.floor(Math.random() * 10000), //Random que asigna el id de manera aleatoria que evita id iguales
        text: input
    });
    
    setInput('')
};

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder='Agregar tarea por hacer' 
        value={input} 
        name='text'
        className='todo-input'
        onChange={handleChange} 
        />
        <button className="todo-button"> Agregar tarea</button>
    </form>
  )
}

export default TodoForm