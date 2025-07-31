import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';


function TodoListt() {

    let todoss = useSelector((state)=>state.todos)
 
    return (
        <ul className='list-group'>
            {
                todoss.map((todo)=> <Todo key={todo.id} id={todo.id} title={todo.title}/>)
            }
        </ul>
    );
}

export default TodoListt;