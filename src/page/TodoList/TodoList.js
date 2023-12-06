import React from 'react';
import {TodoWrapper} from "../../componets/Todo/TodoWrapper";
import './TodoList.css'
function TodoList(props) {
    return (
        <div className='todo-list'>
            <TodoWrapper  />
        </div>
    );
}

export default TodoList;