import React, { useState } from 'react';
import { editTodo, deleteTodo } from './actions';
import { useDispatch } from 'react-redux';

function Todo({id, title}) {

    let [editing, setEditing] = useState(false)
    let [newTitle, setNewtitle] = useState(title) 

    let dispatch = useDispatch()

    let handleTodo = ()=>{
        if(newTitle.trim()){
            dispatch(editTodo({id:id, title:newTitle}))
            setEditing(false)
        }
    }

    let handleDelete = ()=>{
        dispatch(deleteTodo(id))
    }

    return(
       <div>
        {
            editing ? (
                <div className='form-group'>
                    <input className='form-control' type='text'
                    value={newTitle}
                    onChange={(e)=>setNewtitle(e.target.value)}
                    />
                    <button className='btn btn-secondary' onClick={handleTodo}>Save</button>
                </div>    
            ) 
            : (
                <li className='list-group-item'>
                    <p className='list-items-names'>{title}</p>
                    <div className='actions'>
                        <button className='btn btn-warning m-1' onClick={()=>setEditing(true)}>Edit</button>
                        <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
                    </div>
                </li>
            )
        }
       </div>
    );
}

export default Todo;