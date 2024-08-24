import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import './TodoList.css'

const TodoList = ({ itemsTodoList, handleCheckedItemTodoList, handlerDelItemTodoList }) => {
    return (
        <ul className='todo-list'>
            {itemsTodoList.map(item => (
                <li className={!item.checked ? 'todo-list__item' : 'todo-list__item todo-list__item--checked'} key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleCheckedItemTodoList(item.id)}
                    />
                    <label>
                        {item.task}
                    </label>
                    <FaTrashAlt
                        role='button'
                        onClick={() => handlerDelItemTodoList(item.id)}
                    />
                </li>
            ))}
        </ul>
    );
}

export default TodoList;