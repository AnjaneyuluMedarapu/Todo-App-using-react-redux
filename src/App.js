import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';
import TodoListt from './TodoListt';


function App() {

  let dispatch = useDispatch()
  let [todoTitle, setTodoTitle] = useState('')
  let handleTodo = ()=>{
    if(todoTitle.trim()){
      let newTodoo = {
        title: todoTitle
      }
      dispatch(addTodo(newTodoo))
      setTodoTitle("")
    }
  }

  return (
    <div className='container mt-5 w-50'>
      <h3 className='text-primary text-center'>Todo app using redux react</h3>
      <div className='input-group mb-3'>
        <input
        className='form-control'
        type='text'
        value={todoTitle}
        onChange={(e)=>{setTodoTitle(e.target.value)}}
        />
        <button className='btn btn-primary' onClick={function(){handleTodo()}}>Add</button>
      </div>
      <TodoListt/>
    </div>
  );
}

export default App;